import { Component } from '@angular/core';
import { Product } from '../models/Product';
import { ProductList } from '../models/Product.DataSource';
import { ProductServicesService } from '../product-services.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  // product:Product={
  //   Id: 1,
  //   Name:"Bilgisayar"
  // }
  
  secilenUrun:Product | undefined;

  selectProduct(product:Product): void{
    this.secilenUrun=product;
  }

  leave(): void{
    this.secilenUrun=undefined;
  }
  
  productList:Product[] | undefined;

  constructor(private productService:ProductServicesService){}

  ngOnInit():void{
    this.servistenGelenUrunler();
  }

   servistenGelenUrunler():void{
     this.productService.getProductList()
     .subscribe(urunler=>{
        this.productList=urunler;
     });
   }

  // getProduct(){
  //   return this.product;
  // }
  



}
