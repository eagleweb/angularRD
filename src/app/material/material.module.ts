import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, MatBadgeModule,
  MatProgressSpinnerModule, MatTableModule, MatInputModule, MatSelectModule
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
    MatInputModule,
    MatSelectModule
  ],
  exports: [
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
