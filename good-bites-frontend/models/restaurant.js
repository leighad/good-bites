class Restaurant {
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

}