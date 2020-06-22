const BASE_URL = "http://localhost:3000"
const CATEGORIES_URL = `${BASE_URL}/categories`
const RESTAURANTS_URL = `${BASE_URL}/restaurants`

document.addEventListener("DOMContentLoaded", function() {
    Category.loadCategories()
    Category.categoryFormListener()

    //stretch goal: add on click to each category name
    // categoriesClickListener()

    Restaurant.restaurantsClickListener()
    Restaurant.restaurantFormListener()
})
