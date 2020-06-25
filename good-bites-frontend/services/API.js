//stretch goal:
//complete API functionality
class API {
    static baseURL = "http://localhost:3000"
    static catUrl = "http://localhost:3000/categories"

    static options = {
        headers: {
            "Content_Type": "application/json",
            "Accept": "application/json"
        }
    }

    static get(url) {
        return (
            fetch(this.baseURL + url)
            .then(resp => resp.json())
        )
    }

    static post(data) {
        const options = {
            ...API.options, 
            method: 'POST',
            body: JSON.stringify({category:data})
        }

        fetch(API.catUrl, options)
        .then(resp => resp.json())

        .then((data) => {
            if (!data.errors) {
                new Category(data)
                Category.renderCategories()
                clearCatForm()
            } else {
                throw new Error(`${data.errors}`)
            }
        })
        .catch(alert)
    }


}