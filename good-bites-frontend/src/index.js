const BASE_URL = "http://localhost:3000"
const CATEGORIES_URL = `${BASE_URL}/categories`
const RESTAURANTS_URL = `${BASE_URL}/restaurants`

const main = document.querySelector("main")

document.addEventListener("DOMContentLoaded", function() {
    loadCategories()
    mountFormListener()
})

const loadCategories = () => {
    fetch(CATEGORIES_URL)
    .then(res => res.json())
    .then(json => {
        json.forEach(category => renderCategory(category))
    })
}

const renderCategory = (categoryHash) => {
    const div = document.createElement("div")
    const span = document.createElement("span")
    const p = document.createElement("p")
    const button = document.createElement("button")
    const ul = document.createElement("ul")

    div.setAttribute("class", "list")
    div.setAttribute("data-id", categoryHash.id)

    p.innerHTML = categoryHash.name

    button.setAttribute("data-category-id", categoryHash.id)
    button.innerHTML = "Add Restaurant"
    // button.addEventListener("click", createRestaurant)

    div.appendChild(p)
    div.appendChild(button)
    div.appendChild(ul)
    main.appendChild(div)

}

function getCategoryData(event) {
    return {
        group: event.target.querySelector("#group").value
    }
}

function mountFormListener() {
    const categoryForm = document.getElementById("category-form-container")
    categoryForm.addEventListener("submit", function(event) {
        const categoryText = getCategoryData(event)
        debugger 
    })
}