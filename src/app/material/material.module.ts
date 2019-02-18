import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, MatBadgeModule,
  MatProgressSpinnerModule, MatTableModule, MatSliderModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSliderModule
  ],
  exports: [
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSliderModule
  ]
})
export class MaterialModule { }
