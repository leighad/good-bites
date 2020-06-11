const BASE_URL = "http://localhost:3000"
const CATEGORIES_URL = `${BASE_URL}/categories`
const RESTAURANTS_URL = `${BASE_URL}/restaurants`

const main = document.querySelector("main")

document.addEventListener("DOMContentLoaded", function() {
    loadCategories()
    loadRestaurants()
    categoriesClickListener()
    categoryFormListener()
})

// class Category {
//     constructor(obj) {
//         this.id = obj.id
//         this.group = obj.group
//         this.restaurants = obj.restaurants

//     }
// }

// class Restaurant {
//     constructor(obj) {
//         this.id = obj.id
//         this.name = obj.name
//         this.description = obj.description
//         this.review = obj.review
//         this.categoryId = obj.categoryId

//     }
// }

function addCategoriesToDOM(categories) {
    document.querySelector("#category-list-container").innerHTML = ""
    const selectCategory = document.querySelector("#category")
    selectCategory.innerHTML = ""

    categories.forEach(function(cat) {
        renderCategory(htmlifyCategory(cat))
        selectCategory.innerHTML += `<option value=${cat.id}>${cat.group}</option>`
    })
}

function addRestaurantsToDOM(restaurants) {
    restaurants.forEach(function(rest) {
        renderRestaurant(htmlifyRestaurant(rest))
    })
}

const loadCategories = () => {
    fetch(CATEGORIES_URL)
    .then(res => res.json())
    // .then(json => {
    //     json.forEach(category => getCategoryData(category))
    // })
    .then(data => {
        addCategoriesToDOM(data)
    })
}

function categoriesClickListener() {
    const categories = document.querySelector("#category-list-container")
    categories.addEventListener("click", function(event) {
        event.preventDefault()
        // loadCategoryRestaurants()
    })

}

const loadRestaurants = () => {
    fetch(RESTAURANTS_URL)
    .then(res => res.json())
    .then(json => {
        json.forEach(restaurant => renderRestaurant(restaurant))
    })
}

function renderCategory(category) {
    const categoryList = document.querySelector("#category-list-container")
    categoryList.innerHTML += category

}

const renderRestaurant = (restaurantHash) => {
    const div = document.createElement("div")
    const h3 = document.createElement("h3")
    const h5 = document.createElement("h5")
    const h6 = document.createElement("h6")
    const p = document.createElement("p")
    const button = document.createElement("button")
    // const ul = document.createElement("ul")
    // const li = document.createElement("li")


    div.setAttribute("id", "restaurant-container")
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
    // div.appendChild(ul)
    // div.appendChild(li)
    main.appendChild(div)

}

function getCategoryData(event) {
    return {
        group: event.target.querySelector("#group").value
    }
}

const htmlifyCategory = function(cat) {
    return (`
                <span class="card-group">${cat.group}</span>
                <br>
    `)
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

function clearCatForm(event) {
    event.target.querySelector("#group").value = ""
}


// function renderRestaurant(restaurant) {
//     const restaurantList = document.querySelector("#restaurant-container")
//     restaurantList.innerHTML += restaurant

// }

function categoryFormListener() {
    const categoryForm = document.getElementById("category-form-container")
    categoryForm.addEventListener("submit", function(event) {
        event.preventDefault()
        const categoryObject = getCategoryData(event)

        fetch(CATEGORIES_URL, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({category:categoryObject}) // body data type must match "Content-Type" header
        })
        .then(res => res.json())
        .then((data) => {
            // const htmlCat = htmlifyCategory(data)
            // renderCategory(htmlCat)
            loadCategories()
            // is this where we attach restaurant to category?
            clearCatForm(event)        
        })


    })
}

function restaurantFormListener() {
    // const select = document.getElementById("select#category");
    // select.innerHTML = Category.all
    // let selectCategories = []
    // for (let i = 0; i < categories.length; i++){
    //     selectCategories.push(categories[i].group);
    //   // now have option.text, option.value
    // }

    const restaurantForm = document.getElementById("restaurant-form-container")
    restaurantForm.addEventListener("submit", function(event) {
        event.preventDefault()
        const restaurantObject = getRestaurantData(event)

        fetch(RESTAURANTS_URL, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({restaurant:restaurantObject}) // body data type must match "Content-Type" header
        })
        .then(res => res.json())
        .then((data) => {
            const htmlRest = htmlifyRestaurant(data)
            renderCategory(htmlRest)
            // clearRestForm(event)        
        })

    })
}

