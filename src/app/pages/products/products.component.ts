import { Component, OnInit, OnDestroy } from '@angular/core';
import {from, Subscription} from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { ApiService } from '../../shared/service/api.service';
import { Product } from '../../product';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  subscriptions: Subscription = new Subscription();
  products: Product[] = [];
  showLoader = false;

  constructor( private api: ApiService ) { }

  ngOnInit() {
    this.showLoader = true;
    this.api.getProducts()
      .subscribe(res => {
        this.products = res;
        this.showLoader = false;
      }, err => {
        this.showLoader = true;
        console.log(err);
      });
  }

  filterByPrice() {
    const tempArray: Product[] = [];
    const filter$ = from(this.products).pipe(
      filter( item => item.price > 100),
      tap( val => tempArray.push(val))
    );
    this.subscriptions.add(filter$.subscribe(val => this.products = tempArray));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
