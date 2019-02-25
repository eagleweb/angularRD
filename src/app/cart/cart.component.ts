import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../core/services/cart/cart.service';
import { Product } from '../core/models/product.model';
import { MatTable } from '@angular/material';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  @ViewChild(MatTable) table: MatTable<any>;

  public cart$: Observable<Product[]>;
  public displayedColumns: string[] = ['item', 'quantity', 'cost', 'size', 'remove'];

  constructor( private cartService: CartService) {
  }

  ngOnInit() {
    this.cart$ = this.cartService.getItems();
  }

  getTotalCost() {
    return this.cartService.getTotalPrice();
  }

  removeItem(index: number): void {
    this.cartService.removeItemFromCart(index);
    this.table.renderRows();
  }

  changeQuantity(index: number, operation: string): void {
    this.cartService.changeQuantity(index, operation);
  }

}
