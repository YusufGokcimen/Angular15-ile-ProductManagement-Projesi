import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BasketComponent } from './basket/basket.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

const routes:Routes=[
  {path:"",redirectTo:"/Home",pathMatch:"full"},
  {path:"Home",component:HomeComponent},
  {path:"Urunler",component:ProductsComponent},
  {path:"About-Us",component:AboutUsComponent},
  {path:"Sepet",component:BasketComponent},
  {path:"Detail/:id",component:DetailComponent}
]

@NgModule({
  exports:[RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
