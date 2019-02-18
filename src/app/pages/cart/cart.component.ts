import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {CartService} from '../../shared/service/cart.service';
import {Product} from '../../product';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public cart$: Observable<Product[]>;
  public displayedColumns: string[] = ['item', 'quantity', 'cost', 'size', 'remove'];

  constructor( private cartService: CartService) {
    this.cart$ = this.cartService.getItems();
  }

  ngOnInit() {
  }

  public getTotalCost() {
    return this.cart$.pipe(
      map((item: Product[]) => {
        return item.reduce((prev, curr: Product) => {
          return prev + curr.price * curr.quantity;
        }, 0);
      })
    );
  }

  public removeItem(index: number) {
  }

}
