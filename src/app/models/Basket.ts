export class Basket{
    Id:number | undefined;
    ProductId:number | undefined;
    Quantity:number | undefined
    constructor(id:number,productId:number,quantity:number){
        this.Id=id;
        this.ProductId=productId;
        this.Quantity=quantity;
    }
}