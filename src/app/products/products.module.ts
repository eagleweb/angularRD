import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductsComponent } from './product-list/products.component';
import { ItemComponent } from './product-detail/item.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ProductsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
