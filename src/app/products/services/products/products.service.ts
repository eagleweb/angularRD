import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/api/api.service';
import { mergeMap, filter, toArray } from 'rxjs/operators';
import { Product } from '../../../core/models/product.model';
import { Filter } from '../../../core/models/filter.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private apiService: ApiService) { }

  getAllProducts(): Observable<Product[]> {
    return this.apiService.getProducts();
  }

  filterProducts(filterObj) {
    console.log(filterObj.maxPrice.value);
    // return this.apiService.getProducts().pipe(
    //   mergeMap( item => item ),
    //   filter( val => val.price < filterObj.maxPrice.value && val.price > filterObj.minPrice.value),
    //   filter( val => {
    //     return filterObj.size.value ? val.size.includes(filterObj.size.value) : true;
    //   }),
    //   filter( val => {
    //     return filterObj.category.value ? val.category.toLowerCase() === filterObj.category.value : true;
    //   }),
    //   toArray()
    //   );
  }

  searchProducts(searchField: string): Observable<Product[]> {
    return this.apiService.getProducts().pipe(
      mergeMap( item => item ),
      filter( val => val.name.toLowerCase().includes(searchField.trim().toLowerCase())),
      toArray()
    );
  }
}
