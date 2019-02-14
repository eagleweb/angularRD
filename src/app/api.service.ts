import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Product } from './product';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient ) { }

  public getAllProducts(): Observable<Product[]> {
    return this.http
      .get(API_URL + '/products')
      .pipe(
        map(response => {
          const products = JSON.parse(response);
          return products.map((item) => new Product(item));
        }),
        catchError(this.handleError)
      );
  }

  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return throwError();
  }
}
