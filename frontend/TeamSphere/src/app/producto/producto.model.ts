export class Product{
    name!: String;
    price!: number;
    description!: String;
    date?:String;
    image!: String[];
    seller?: number;
    buyer?: number;

    constructor(name: String, price: number, description: String, date: String, image: String[], seller: number, buyer: number){
        this.name = name;
        this.price = price;
        this.description = description;
        if (date) {
            this.date = date;
        }
        this.image = image;
        if (seller) {
            this.seller = seller;
        }
        if (buyer) {
            this.buyer = buyer;
        }

    }
}