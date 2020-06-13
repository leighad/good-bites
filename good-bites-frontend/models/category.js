class Category {
    static all = []

    constructor({id, group}) {
        this.id = id
        this.group = group
        Category.all.push(this)

    }
}
