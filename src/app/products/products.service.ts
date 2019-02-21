import { Injectable } from '@angular/core';
import { ApiService } from '../core/services/api.service';
import { filter, mergeMap, map, tap, reduce } from 'rxjs/operators';
import { Product } from '../core/models/product.model';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private apiService: ApiService) { }

  getAllProducts(): Observable<Product[]> {
    return this.apiService.getProducts();
  }

  filterProducts(price: number): Observable<Product[]> {
    return this.apiService.getProducts().pipe(
      map( results => results.filter(r => r.price > price) )
    );

  }
}

