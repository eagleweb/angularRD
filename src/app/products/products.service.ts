import { Injectable } from '@angular/core';
import { ApiService } from '../core/services/api/api.service';
import { mergeMap, filter, toArray } from 'rxjs/operators';
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

  filterProducts(filterObj: Filter): Observable<Product[]> {
    return this.apiService.getProducts().pipe(
      mergeMap( item => item ),
      filter( val => val.price < filterObj.max_price && val.price > filterObj.min_price),
      toArray()
      );
  }
}
