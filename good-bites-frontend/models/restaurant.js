class Restaurant {
    static restaurantsUrl = "http://localhost:3000/restaurants"

    static all = []

    constructor({id, name, description, review, category_id}) {
        this.id = id
        this.name = name
        this.description = description
        this.review = review
        this.category_id = category_id
        Restaurant.all.push(this)
    }

    static renderRestaurant(restaurantHash) {
        const restaurantList = document.querySelector("#restaurant-container")
        const main = document.querySelector("main")
        const div = document.createElement("div")
        const h3 = document.createElement("h3")
        const h5 = document.createElement("h5")
        const h6 = document.createElement("h6")
        const p = document.createElement("p")
        const button = document.createElement("button")
    
        // div.setAttribute("id", "restaurant-container")
        div.setAttribute("data-id", restaurantHash.id)
    
        h3.innerHTML = restaurantHash.name
        h5.innerHTML = "Description: <br>" + restaurantHash.description
        h6.innerHTML = "Review: <br>" + restaurantHash.review
        p.innerHTML = restaurantHash.category.group
    
        button.setAttribute("data-restaurant-id", restaurantHash.id)
        button.innerHTML = "Save Restaurant"
        // button.addEventListener("click", saveRestaurant)
    
        div.appendChild(h3)
        div.appendChild(h5)
        div.appendChild(h6)
        div.appendChild(p)
        div.appendChild(button)
        restaurantList.appendChild(div)
    
        main.appendChild(div)
    }

    static addRestaurantsToDOM(restaurants) {
        const restaurantList = document.querySelector("#restaurant-container")
        restaurantList.innerHTML = ""
        const selectName = document.querySelector("#name").value 
        const selectDescription = document.querySelector("#description").value 
        const selectReview = document.querySelector("#review").value 
        const selectCategory = document.querySelector("#category").value 
    
        restaurants.forEach(function(rest) {
            // renderRestaurant(htmlifyRestaurant(rest))
            renderRestaurant(rest)
            selectName.innerHTML += `<option value=${rest.id}>${rest.name}</option>`
            selectDescription.innerHTML += `<option value=${rest.id}>${rest.description}</option>`
            selectReview.innerHTML += `<option value=${rest.id}>${rest.review}</option>`
            selectCategory.innerHTML += `<option value=${rest.category.id}>${rest.category.group}</option>`
        })
    }

    static restaurantsClickListener() {
        const allRestaurants = document.getElementById("all-restaurants");
        allRestaurants.addEventListener("click", function(event) {
            event.preventDefault()
            loadRestaurants()
        })
    }

    loadRestaurants = () => {
        fetch(restaurantsUrl)
        .then(res => res.json())
        // .then(json => {
        //     json.forEach(restaurant => renderRestaurant(restaurant))
        // })
        .then(data => {
            addRestaurantsToDOM(data)
        })
    }

    getRestaurantData(event) { 
        return {
            name: event.target.querySelector("#name").value,
            description: event.target.querySelector("#description").value,
            review: event.target.querySelector("#review").value,
            category_id: event.target.querySelector("#category").value
        }
    }

    clearRestForm(event) {
        event.target.querySelector("#name").value = ""
        event.target.querySelector("#description").value = ""
        event.target.querySelector("#review").value = ""
        event.target.querySelector("#category").value = "4"
    }

    static restaurantFormListener() {
        const restaurantForm = document.getElementById("restaurant-form-container")
        restaurantForm.addEventListener("submit", function(event) {
            event.preventDefault()
            const restaurantObject = getRestaurantData(event)
    
            fetch(restaurantsUrl, {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({restaurant:restaurantObject}) 
                // body data type must match "Content-Type" header
            })
            .then(res => res.json())
            .then((data) => {
                // const htmlRest = htmlifyRestaurant(data)
                // renderRestaurant(htmlRest)
    
                loadRestaurants()
                clearRestForm(event)        
            })
        })
    }

}