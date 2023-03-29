import { Component } from '@angular/core';
import { BasketList } from '../models/Basket.DataSource';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {
  getBasketList(){
    return BasketList;
  }

}
