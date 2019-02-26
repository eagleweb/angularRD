import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { CardComponent } from './card/card.component';
import { SaleComponent } from './sale/sale.component';

@NgModule({
  declarations: [
    CardComponent,
    SaleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    CardComponent,
    SaleComponent
  ]
})
export class SharedModule { }
