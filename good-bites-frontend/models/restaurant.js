class Restaurant {
    // static restaurantsUrl = "http://localhost:3000/restaurants"
    static all = []

    constructor(obj) {
        this.id = obj.id;
        this.name = obj.name;
        this.description = obj.description;
        this.review = obj.review;
        this.categoryId = obj.category_id;
        this.category = obj.category;
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
    
        //stretch goal: create list to save restaurants
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

    static addRestaurantsToDOM() {
        // const restaurantList = document.querySelector("#restaurant-container")
        // restaurantList.innerHTML = ""

        // let selectName = document.querySelector("#name")
        // let selectDescription = document.querySelector("#description")
        // let selectReview = document.querySelector("#review")
        // let selectCategory = document.querySelector("#category") 

        // selectName = ""
        // selectDescription = ""
        // selectReview = ""
        // selectCategory = ""

        Restaurant.all.forEach(function(rest) {
            Restaurant.renderRestaurant(rest)
        })
    }

    static restaurantsClickListener() {
        const allRestaurants = document.getElementById("all-restaurants");
        allRestaurants.addEventListener("click", function(event) {
            event.preventDefault()
            Restaurant.loadRestaurants()
        })
    }

    static loadRestaurants() {
        // const restaurantsUrl = "http://localhost:3000/restaurants"

        fetch(RESTAURANTS_URL)
        .then(res => res.json())
        .then(json => {
            json.forEach(data => new Restaurant(data))
        })
        .then(data => {
            Restaurant.addRestaurantsToDOM(data)
        })
    }

    static getRestaurantData(event) { 
        return {
            name: event.target.querySelector("#name").value,
            description: event.target.querySelector("#description").value,
            review: event.target.querySelector("#review").value,
            category_id: event.target.querySelector("#category").value
        }
    }

    static clearRestForm(event) {
        event.target.querySelector("#name").value = ""
        event.target.querySelector("#description").value = ""
        event.target.querySelector("#review").value = ""
        event.target.querySelector("#category").value = "4"
    }

    static restaurantFormListener() {
        // const restaurantsUrl = "http://localhost:3000/restaurants"
        const restaurantForm = document.getElementById("restaurant-form-container")
        restaurantForm.addEventListener("submit", function(event) {
            event.preventDefault()
            const restaurantObject = Restaurant.getRestaurantData(event)
            // Restaurant.clearRestForm()
    
            fetch(RESTAURANTS_URL, {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({restaurant:restaurantObject}) 
                // body data type must match "Content-Type" header
            })
            .then(res => res.json())
            .then((json) => {

                Restaurant.renderRestaurant(json)
                Restaurant.addRestaurantsToDOM(json)

                // Restaurant.loadRestaurants()
                Restaurant.clearRestForm(event)        
            })
        })
    }

}

// function clearRestForm(event) {
//     event.target.querySelector("#name").value = ""
//     event.target.querySelector("#description").value = ""
//     event.target.querySelector("#review").value = ""
//     event.target.querySelector("#category").value = `${Category.all.sort_by |c| c.group}` 
// }
