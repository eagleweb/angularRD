import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'cart',
    loadChildren: './cart/cart.module#CartModule',
    data: { title: 'Product cart' }
  },
  {
    path: 'products',
    loadChildren: './products/products.module#ProductsModule',
    data: { title: 'Products' }
  },
  {
    path: 'account',
    loadChildren: './account/account.module#AccountModule',
    data: { title: 'Account' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
