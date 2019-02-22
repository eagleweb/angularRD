import { Injectable } from '@angular/core';
import { ApiService } from '../core/services/api.service';
import { map } from 'rxjs/operators';
import { Product } from '../core/models/product.model';
import { Filter } from '../core/models/filter.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private apiService: ApiService) { }

  getAllProducts(): Observable<Product[]> {
    return this.apiService.getProducts();
  }

  filterProducts(filter: Filter): Observable<Product[]> {
    return this.apiService.getProducts().pipe(
      map( item => item.filter( val => val.price < filter.max_price && val.price > filter.min_price))
    );
  }
}

