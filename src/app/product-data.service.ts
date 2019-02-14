import { Injectable } from '@angular/core';
import { Product } from './product';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor( private api: ApiService ) { }

  getAllProducts(): Observable<Product[]> {
    return this.api.getAllProducts();
  }
}
