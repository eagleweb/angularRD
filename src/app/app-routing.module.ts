import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { CartComponent } from './pages/cart/cart.component';
import { ItemComponent } from './pages/item/item.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Online shop' }
  },
  {
    path: 'products',
    component: ProductsComponent,
    pathMatch: 'full',
    data: { title: 'List of Products' }
  },
  {path: 'products/:id', component: ItemComponent},
  {path: 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
