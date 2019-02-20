import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import {BehaviorSubject, Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartSubject: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  private cart: Product[] = [];

  constructor() {
    this.cartSubject.subscribe( val => this.cart = val);
  }

  public getItems(): Observable<Product[]> {
    return this.cartSubject.asObservable();
  }

  public addItemToCart(item: Product): void {
    this.cartSubject.next([...this.cart, item]);
  }

  public removeItemFromCart(item: Product) {
    const curr = [...this.cart];
    const newCart = curr.filter(val => val.id !== item.id);
    this.cartSubject.next(newCart);
  }

  public getTotalPrice(): Observable<number> {
    return this.cartSubject.pipe(
      map((item: Product[]) => {
        return item.reduce((prev, curr: Product) => {
          return prev + curr.price;
        }, 0);
      })
    );
  }
}
