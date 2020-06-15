class Category {
    static all = []

    constructor({id, group}) {
        this.id = id
        this.group = group
        Category.all.push(this)
    }

    // htmlifyCategory() {
    //     return (`
    //             <span class="card-group">${this.group}</span>
    //             <br>
    //     `)
    // }

    static renderCategory(cat) {
        const categoryList = document.querySelector("#category-list-container")
        categoryList.innerHTML += cat.group
    }

    static addCategoriesToDOM() {
        const categoryList = document.querySelector("#category-list-container")
        const selectCategory = document.querySelector("#category")
        
        categoryList.innerHTML = ""
        selectCategory.innerHTML = ""
    
        Category.all.forEach(function(cat) {
            // renderCategory(htmlifyCategory(cat))
            // const categoryList = document.querySelector("#category-list-container")
            categoryList.innerHTML += `${cat.group}<br>` 

            selectCategory.innerHTML += `<option value=${cat.id}>${cat.group}</option>`
        })
    }

    // static renderCategories() {
    //     const categoryList = document.querySelector("#category-list-container")
    //     categoryList.innerHTML = ""
    //     Category.all.forEach(cat => cat.renderCategory())
    // }

    static loadCategories() {
        //this will send request and create all categories
        API.get()
        .then(cats => {
            cats.forEach(cat => new Category(cat))
            // Category.renderCategories() //this will render all categories
        })
        .then(data => {
            Category.addCategoriesToDOM(data)
        })
    }

    // getCategoryData(event) {
    //     return {
    //         group: event.target.querySelector("#group").value
    //     }
    // }

    // clearCatForm(event) {
    //     this.event.target.querySelector("#group").value = ""
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
            // .then((json) => {
                // const categoryList = document.querySelector("#category-list-container")
                // categoryList.innerHTML = ""
                // Category.loadCategories(json)

                // Category.renderCategory(json)
                // Category.addCategoriesToDOM()

                // Category.loadCategories()
                // clearCatForm(event)
            // }) 
            .then((json) => {
                const categoryList = document.querySelector("#category-list-container")

                categoryList.innerHTML += json.group 
                // Category.loadCategories()
            })

        })

    }

}
