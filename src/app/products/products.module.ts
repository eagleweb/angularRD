import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';

import { ProductsComponent } from './products.component';
import { ItemComponent } from './item.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
