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
  public displayedColumns: string[] = ['item', 'quantity', 'cost', 'size', 'remove'];

  constructor( private cartService: CartService) {
    this.cart$ = this.cartService.getItems();
    this.cart$.subscribe(val => this.cartItems = val);
  }

  ngOnInit() {

  }

  public getTotalCost() {
    return this.cartItems.map(t => t.price * t.quantity).reduce((acc, value) => acc + value, 0);
  }

  public removeItem(index: number) {

  }

}
