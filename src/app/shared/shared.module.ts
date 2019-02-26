import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { CardComponent } from './component/card/card.component';
import { SaleComponent } from './component/sale/sale.component';
import { CutStringPipe } from './pipe/cut';

@NgModule({
  declarations: [
    CardComponent,
    SaleComponent,
    CutStringPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    CardComponent,
    SaleComponent,
    CutStringPipe
  ]
})
export class SharedModule { }
