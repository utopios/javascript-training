function Product(name, brand, onSale, ...categories) {
    this.name = name
    this.brand = brand
    this.onSale = onSale
    this.categories = [...categories]
}

Product.prototype.toggleSale = function() {
    this.onSale = !this.onSale
}

function Store() {
    this.inventory = []
}


//Addition

Store.prototype.addProduct = function(product) {
    this.inventory.push(product)
}

//Search 
Store.prototype.searchProducts = function(query) {
    return this.inventory.filter(p => p.name.includes(query) || p.brand.includes(query) || p.categories.includes(query))
}

//Changing Status of product
Store.prototype.toggleStatus = function(productName) {
    const product = this.inventory.find(p => p.name === productName)
    if(product) {
        product.toggleSale()
    }
}

//Recommendation
Store.prototype.recommendProducts = function(category) {
    const productsInCategory = this.inventory.filter(p => p.categories.includes(category) && !p.onSale)
    if(productsInCategory.length > 0) {
        return productsInCategory[0];
    }
    return null; // No recommendation available
}

//Deletion

Store.prototype.deleteProduct = function(productName) {
    const index = this.inventory.findIndex( p => p.name === productName)
    if(index !== -1) {
        this.inventory.splice(index, 1)
    }
}


//Usage:

const myStore = new Store()

for(let i=1; i <= 5; i++) {
    myStore.addProduct(new Product("product"+i, "brand"+i, true, "cat1", "cat2"))
}

console.table(myStore.inventory)

console.log(myStore.searchProducts("product1"))

myStore.toggleStatus("product2")

console.log(myStore.recommendProducts("cat1"))

myStore.deleteProduct("product3")

console.table(myStore.inventory)
