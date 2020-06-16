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

}