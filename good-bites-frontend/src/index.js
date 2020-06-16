const BASE_URL = "http://localhost:3000"
const CATEGORIES_URL = `${BASE_URL}/categories`
const RESTAURANTS_URL = `${BASE_URL}/restaurants`
// const RESTAURANT_URL = `${BASE_URL}/restaurants/${this.id}`

const main = document.querySelector("main")

document.addEventListener("DOMContentLoaded", function() {
    Category.loadCategories()
    
    // loadRestaurants()
    restaurantsClickListener()
    // categoriesClickListener()

    Category.categoryFormListener()
    // categoryFormListener()
    restaurantFormListener()
})

// const categoryList = document.querySelector("#category-list-container")
// const selectCategory = document.querySelector("#category")
const restaurantList = document.querySelector("#restaurant-container")

//ORIGINAL CODE******
// function addCategoriesToDOM(categories) {
//     categoryList.innerHTML = ""
//     selectCategory.innerHTML = ""

//     categories.forEach(function(cat) {
//         renderCategory(htmlifyCategory(cat))
//         selectCategory.innerHTML += `<option value=${cat.id}>${cat.group}</option>`
//     })
// }

//ORIGINAL CODE
// function addRestaurantsToDOM(restaurants) {
//     restaurantList.innerHTML = ""
//     const selectName = document.querySelector("#name").value 
//     const selectDescription = document.querySelector("#description").value 
//     const selectReview = document.querySelector("#review").value 
//     const selectCategory = document.querySelector("#category").value 

//     restaurants.forEach(function(rest) {
//         // renderRestaurant(htmlifyRestaurant(rest))
//         renderRestaurant(rest)
//         selectName.innerHTML += `<option value=${rest.id}>${rest.name}</option>`
//         selectDescription.innerHTML += `<option value=${rest.id}>${rest.description}</option>`
//         selectReview.innerHTML += `<option value=${rest.id}>${rest.review}</option>`
//         selectCategory.innerHTML += `<option value=${rest.category.id}>${rest.category.group}</option>`
//     })
// }

//ORIGINAL CODE******
// const loadCategories = () => {
//     fetch(CATEGORIES_URL)
//     .then(res => res.json())
//     // .then(json => {
//     //     json.forEach(category => getCategoryData(category))
//     // })
//     .then(data => {
//         addCategoriesToDOM(data)
//     })
// }

// NOT CURRENTLY WORKING
// function categoriesClickListener() {
//     const allCategories = document.querySelectorAll(".card-group");
//     allCategories.forEach(function(cat){
//         cat.addEventListener("click", function(event) {
//             event.preventDefault()
//             // loadCategoryRestaurants()
//         })
//     }) 
// }

function restaurantsClickListener() {
    const allRestaurants = document.getElementById("all-restaurants");
    allRestaurants.addEventListener("click", function(event) {
        event.preventDefault()
        loadRestaurants()
    })
}

const loadRestaurants = () => {
    fetch(RESTAURANTS_URL)
    .then(res => res.json())
    // .then(json => {
    //     json.forEach(restaurant => renderRestaurant(restaurant))
    // })
    .then(data => {
        addRestaurantsToDOM(data)
    })
}

// const loadRestaurant = () => {
//     fetch (RESTAURANT_URL)
//     .then(res => res.json())
//     .then(data => {

//     })
// }

//ORIGINAL CODE******
// function renderCategory(category) {
//     categoryList.innerHTML += category
// }

//ORIGINAL CODE
// const renderRestaurant = (restaurantHash) => {
//     const div = document.createElement("div")
//     const h3 = document.createElement("h3")
//     const h5 = document.createElement("h5")
//     const h6 = document.createElement("h6")
//     const p = document.createElement("p")
//     const button = document.createElement("button")

//     // div.setAttribute("id", "restaurant-container")
//     div.setAttribute("data-id", restaurantHash.id)

//     h3.innerHTML = restaurantHash.name
//     h5.innerHTML = "Description: <br>" + restaurantHash.description
//     h6.innerHTML = "Review: <br>" + restaurantHash.review
//     p.innerHTML = restaurantHash.category.group

//     button.setAttribute("data-restaurant-id", restaurantHash.id)
//     button.innerHTML = "Save Restaurant"
//     // button.addEventListener("click", saveRestaurant)

//     div.appendChild(h3)
//     div.appendChild(h5)
//     div.appendChild(h6)
//     div.appendChild(p)
//     div.appendChild(button)
//     restaurantList.appendChild(div)

//     main.appendChild(div)
// }

//ORIGINAL CODE******
// function getCategoryData(event) {
//     return {
//         group: event.target.querySelector("#group").value
//     }
// }

//ORIGINAL CODE******
// const htmlifyCategory = function(cat) {
//     return (`
//             <span class="card-group">${cat.group}</span>
//             <br>
//     `)
// }

function getRestaurantData(event) { 
    return {
        name: event.target.querySelector("#name").value,
        description: event.target.querySelector("#description").value,
        review: event.target.querySelector("#review").value,
        category_id: event.target.querySelector("#category").value
    }
}

// const htmlifyRestaurant = function(rest) {
//     return (`
//         <div class="list">
//             <div class="list-content">
//                 <span class="list-name">${rest.name}</span>
//                 <span class="list-name">${rest.description}</span>
//                 <span class="list-name">${rest.review}</span>
//                 <span class="list-name">${rest.category.group}</span>
//             </div>
//         </div>
//     `
//     )
// }


//ORIGINAL CODE******
// function clearCatForm(event) {
//     event.target.querySelector("#group").value = ""
// }

function clearRestForm(event) {
    event.target.querySelector("#name").value = ""
    event.target.querySelector("#description").value = ""
    event.target.querySelector("#review").value = ""
    event.target.querySelector("#category").value = "4"
}

//ORIGINAL CODE******
// function categoryFormListener() {
//     const categoryForm = document.getElementById("category-form-container")
//     categoryForm.addEventListener("submit", function(event) {
//         event.preventDefault()
//         const categoryObject = getCategoryData(event)

//         fetch(CATEGORIES_URL, {
//             method: 'POST', 
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({category:categoryObject}) 
//             // body data type must match "Content-Type" header
//         })
//         .then(res => res.json())
//         .then((data) => {
//             // const htmlCat = htmlifyCategory(data)
//             // renderCategory(htmlCat)
//             loadCategories()
//             clearCatForm(event)        
//         })
//     })
// }

function restaurantFormListener() {
    const restaurantForm = document.getElementById("restaurant-form-container")
    restaurantForm.addEventListener("submit", function(event) {
        event.preventDefault()
        const restaurantObject = getRestaurantData(event)

        fetch(RESTAURANTS_URL, {
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
