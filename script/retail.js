"use strict";
var Product = /** @class */ (function () {
    function Product(_id, _name, _price) {
        console.log("constructor called");
        this.id = _id;
        this.name = _name;
        this.price = _price;
    }
    Product.prototype.setProductName = function (_name) {
        this.name = _name;
    };
    Product.prototype.getProductName = function () {
        return this.name;
    };
    Product.prototype.getProductDetails = function () {
        console.log("Product Details");
        console.log("id", this.id);
        console.log("name", this.name);
        console.log("price", this.price);
    };
    return Product;
}());
var obj = new Product(1, 'Adi', '500');
obj.getProductDetails();
obj.setProductName("Rebook");
var product_name = obj.getProductName();
console.log(product_name);
//# sourceMappingURL=retail.js.map