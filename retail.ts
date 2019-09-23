class Product {
    id: number
    name: string
    price: string
    
    constructor(_id: number, _name: string, _price: string) {
        console.log("constructor called")
        this.id = _id;
        this.name = _name;
        this.price = _price;
    }
    
    setProductName(_name: string) {
        this.name = _name;
    }
    
    getProductName() {
        return this.name
    }


    getProductDetails() {
        console.log("Product Details")
        console.log("id", this.id)
        console.log("name", this.name)
        console.log("price", this.price)
    }
}
let obj = new Product(1, 'Adi', '500')
obj.getProductDetails()
obj.setProductName("Rebook")
let product_name = obj.getProductName()
console.log(product_name)
