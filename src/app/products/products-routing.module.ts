import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './product-list/products.component';
import { ItemComponent } from './product-detail/item.component';

const routes: Routes = [
      {
        path: '',
        component: ProductsComponent
      },
      {
        path: ':id',
        component: ItemComponent
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductsRoutingModule { }
