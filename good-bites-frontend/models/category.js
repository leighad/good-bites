class Category {
    static all = []

    constructor(obj) {
        this.id = obj.id;
        this.group = obj.group;
        this.restaurants = obj.restaurants;
        Category.all.push(this)

    }

    static addCategoriesToDOM() {
        const categoryList = document.querySelector("#category-list-container")
        const selectCategory = document.querySelector("#category")
        
        categoryList.innerHTML = ""
        selectCategory.innerHTML = ""
    
        Category.all.forEach(function(cat) {
            categoryList.innerHTML += `<p class="category-p-tag" data-id="${cat.id}">${cat.group}</p>` 
            selectCategory.innerHTML += `<option value=${cat.id}>${cat.group}</option>`
        })
    }

    static loadCategories() {
        fetch(CATEGORIES_URL)
        .then(resp => resp.json())
        // API.get("/categories")
        .then(data => {
            data.forEach(cat => new Category(cat))
            Category.addCategoriesToDOM()
        })
    }

    //stretch goal: add on click to each category name
    //categoriesClickListener() {
    //     const allCategories = document.querySelectorAll(".card-group");
    //     allCategories.forEach(function(cat){
    //         cat.addEventListener("click", function(event) {
    //             event.preventDefault()
    //             // loadCategoryRestaurants()
    //         })
    //     }) 
    // }

    static categoryFormListener() {
        const categoryForm = document.getElementById("category-form-container")
        categoryForm.addEventListener("submit", function(event) {
            event.preventDefault()
            const categoryObject = { group: event.target.querySelector("#group").value}
            event.target.querySelector("#group").value = ""
    
            fetch(CATEGORIES_URL, {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({category:categoryObject}) 
                // body data type must match "Content-Type" header
            })
            .then(res => res.json())

            .then((json) => {
                // const categoryList = document.querySelector("#category-list-container")
                // categoryList.innerText = ""

                // Category.all.push(json)
                new Category(json)
                Category.addCategoriesToDOM(json)
                // Category.renderCategory(json)
            })
        })
    }
    
}
