import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';

import { Product } from './models/Product';
import { ProductList } from './models/Product.DataSource';

@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {

  constructor() { }

  getProductList():Observable<Product[]>{//asenkron metod ile veriler bağımsız bir şekilde işlem görecek
    return of(ProductList);
  }

  getSingleProduct(id:number):Observable<Product | undefined>{
    return of(ProductList.find(deger=>deger.Id===id));
  }


}
