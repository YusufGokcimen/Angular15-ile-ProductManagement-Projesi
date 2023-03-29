import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Basket } from '../models/Basket';
import { BasketList } from '../models/Basket.DataSource';
import { Product } from '../models/Product';
import { ProductServicesService } from '../product-services.service';
import { ProductList } from '../models/Product.DataSource';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{
//http://localhost:4200/Detail/3

  @Input() product:Product | undefined;
  basketNumber=1;
  basketid=0;
  constructor(
    private productServices:ProductServicesService,
    private route:ActivatedRoute,private productService:ProductServicesService){}

    ngOnInit(): void {
      this.getProduct();
      this.servistenGelenUrunler();
    }
    getProduct(): void{
      const id = this.route.snapshot.paramMap.get('id');
      this.productServices.getSingleProduct(Number(id))
      .subscribe(urun=>this.product=urun)
    } 

    minusProduct(){
      this.basketNumber--;
      if(this.basketNumber<=0)this.basketNumber=0
    }
    plusProduct(number:any){
      this.basketNumber++;
      if(number<=this.basketNumber)this.basketNumber=number

    }
   
    BasketProduct:Product|undefined;
    addBasket(productid:any,quantity:any){
      this.basketid++;
        const basket= new Basket(this.basketid,productid,quantity);

        this.BasketProduct=this.productList?.find(basketproduct=>basketproduct.Id===productid)
       

        BasketList.push(basket);
    }

    
  productList:Product[] | undefined;

 

   servistenGelenUrunler():void{
     this.productService.getProductList()
     .subscribe(urunler=>{
        this.productList=urunler;
     });
   }
}

