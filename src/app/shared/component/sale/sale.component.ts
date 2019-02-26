import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { take, mergeMap, toArray } from 'rxjs/operators';
import { ApiService } from '../../../core/services/api/api.service';
import { Product } from '../../../core/models/product.model';


@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit {

  public saleProducts$: Observable<Product[]>;

  constructor( private apiService: ApiService ) { }

  ngOnInit() {
    this.saleProducts$ = this.apiService.getProducts().pipe(
      mergeMap( item => item ),
      take(4),
      toArray()
    );
  }

}
