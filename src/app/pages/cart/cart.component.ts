import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {CartService} from '../../shared/service/cart.service';
import {Product} from '../../product';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public cart$: Observable<Product[]>;
  public cartItems: Product[] = [];
  public displayedColumns: string[] = ['item', 'quantity', 'cost', 'remove'];

  constructor( private cartService: CartService) {
    this.cart$ = this.cartService.getItems();
    this.cart$.subscribe(val => this.cartItems = val);
  }

  ngOnInit() {
  }

  public getTotal(): Observable<number> {
    return this.cartService.getTotalPrice();
  }

  public removeItem(item: Product) {
    this.cartService.removeItemFromCart(item);
  }

}
