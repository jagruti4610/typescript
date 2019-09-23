class HotelDetail{
    id:number
    itemName:string
    desc:string
    price:number
    menuType:string
    constructor(_id:number, _itemName:string, _desc:string, _price:number, _menuType:string){
        console.log('constructor')
        this.id = _id
        this.itemName = _itemName
        this.desc = _desc
        this.price = _price
        this.menuType = _menuType
    }
}

setHotelDetail(){
    this.itemName = _itemName;
}

getHotelDetail(){

}

let obj = new HotelDetail()
obj.getProductDetails()
obj.setHotelDetail("Rebook")
let hotelDetail = obj.getHotelDetail()
console.log(hotelDetail)
