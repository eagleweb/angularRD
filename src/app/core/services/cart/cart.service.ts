import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { map, reduce } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartSubject: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  private cart: Product[] = [];

  constructor() {
    this.cartSubject.subscribe( val => this.cart = val);
  }

  getItems(): Observable<Product[]> {
    return this.cartSubject.asObservable();
  }

  addItemToCart(item: Product): void {
    this.cartSubject.next([...this.cart, item]);
  }

  removeItemFromCart(item: number) {
    this.cart.splice(item, 1);
  }

  getTotalPrice(): Observable<number> {
    return from(this.cart).pipe(
      map(( item ) => item),
      reduce( (acc, val: Product) => acc + val.price * val.quantity, 0),
    );
  }

  changeQuantity(index: number, operation: string): void {
    if (operation === 'inc') {
      this.cart[index].quantity++;
    } else {
      if (this.cart[index].quantity === 1) {
        return;
      } else { this.cart[index].quantity--; }
    }
  }
}
