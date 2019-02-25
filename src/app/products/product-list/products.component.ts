import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Product } from '../../core/models/product.model';
import { Filter } from '../../core/models/filter.model';
import { ProductsService } from '../services/products/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription = new Subscription();

  public products$: Observable<Product[]>;
  public filterObj: Filter = { min_price: 0, max_price: 10000, size: '', category: ''};
  public searchField: FormControl;

  constructor( private productsService: ProductsService ) {
  }

  ngOnInit() {
    this.products$ = this.productsService.getAllProducts();
    this.searchField = new FormControl();
    this.searchProducts();
  }

  searchProducts(): void {
    this.subscriptions.add( this.searchField.valueChanges.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap( searchField => this.productsService.searchProducts(searchField))
      ).subscribe(res => this.products$ = of(res))
    );
  }

  filterProducts(filter): void {
    this.products$ = this.productsService.filterProducts(filter);
  }

  clearFilter(): void {
    this.filterObj = { min_price: 0, max_price: 10000, size: '', category: ''};
    this.products$ = this.productsService.getAllProducts();
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
