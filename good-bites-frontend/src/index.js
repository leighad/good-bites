const BASE_URL = "http://localhost:3000"
const CATEGORIES_URL = `${BASE_URL}/categories`
const RESTAURANTS_URL = `${BASE_URL}/restaurants`

const main = document.querySelector("main")

document.addEventListener("DOMContentLoaded", function() {
    loadCategories()
    mountFormListener()
})

function addCategoriesToDOM(categories) {
    categories.forEach(function(cat) {
        renderCategory(htmlifyCategory(cat))
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

// const renderCategory = (categoryHash) => {
//     const div = document.createElement("div")
//     const span = document.createElement("span")
//     const p = document.createElement("p")
//     const button = document.createElement("button")
//     const ul = document.createElement("ul")

//     div.setAttribute("class", "list")
//     div.setAttribute("data-id", categoryHash.id)

//     p.innerHTML = categoryHash.name

//     button.setAttribute("data-category-id", categoryHash.id)
//     button.innerHTML = "Add Restaurant"
//     // button.addEventListener("click", createRestaurant)

//     div.appendChild(p)
//     div.appendChild(button)
//     div.appendChild(ul)
//     main.appendChild(div)

// }

function getCategoryData(event) {
    return {
        group: event.target.querySelector("#group").value
    }
}

const htmlifyCategory = function(cat) {
    return (`
        <div class="card">
            <div class="card-content">
                <span class="card-group">${cat.group}</span>
                <!-- <p>Category</p> -->
            </div>
        </div>
        // <br>
    `
    )
}

function clearForm(event) {
    event.target.querySelector("#group").value = ""
}

function renderCategory(category) {
    const categoryList = document.querySelector("#category-container")
    categoryList.innerHTML += category

}

function mountFormListener() {
    const categoryForm = document.getElementById("category-form-container")
    categoryForm.addEventListener("submit", function(event) {
        event.preventDefault()
        const categoryObject = getCategoryData(event)
        const htmlCat = htmlifyCategory(categoryObject)
        renderCategory(htmlCat)
        clearForm(event)
    })
}