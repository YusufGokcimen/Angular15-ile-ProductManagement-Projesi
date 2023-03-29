import { Component } from "@angular/core";
import { BasketList } from "../models/Basket.DataSource";

@Component({
    selector:"header",
    templateUrl:"./header.html"
})
export class HeaderComponent{
    logoName="Product Managament";
    productBasket(){
        return BasketList.length;
      }
}