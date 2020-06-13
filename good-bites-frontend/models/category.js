class Category {
    static all = []

    constructor({id, group}) {
        this.id = id
        this.group = group
        Category.all.push(this)

    }

    htmlifyCategory() {
        return (`
                <span class="card-group">${this.group}</span>
                <br>
        `)
    }

    renderCategory() {
        categoryList.innerHTML += this.htmlifyCategory()

    }

    static renderCategories() {
        categoryList.innerHTML = ""
        Category.all.forEach(cat => cat.renderCategory())
    }

    static loadCategories() {
        //this will send request and create all categories
        API.get() //this will create all categories
        .then(cats => {
            cats.forEach(cat => new Category(cat))
            Category.renderCategories() //this will render all categories
        })
    }

}
