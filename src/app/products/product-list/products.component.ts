import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../core/models/product.model';
import { Filter } from '../../core/models/filter.model';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products$: Observable<Product[]>;
  public filter: Filter = { min_price: 0, max_price: 10000, size: ''};

  constructor( private productsService: ProductsService ) {
  }

  ngOnInit() {
    this.products$ = this.productsService.getAllProducts();
  }

  filterProducts(filter: Filter) {
    this.products$ = this.productsService.filterProducts(filter);
  }

}
