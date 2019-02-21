import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Product } from '../../core/models/product.model';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  subscriptions: Subscription = new Subscription();
  public products$: Observable<Product[]>;

  constructor( private productsService: ProductsService ) {
  }

  ngOnInit() {
    this.products$ = this.productsService.getAllProducts();
  }

  filterByPrice() {
    this.products$ = this.productsService.filterProducts(100);
    // arr.subscribe(val => console.log(val));
    // this.subscriptions.add(filter$.subscribe(val => this.products = tempArray));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
