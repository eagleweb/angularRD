import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data.service';
import { Product } from '../product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ProductDataService]
})
export class HomeComponent implements OnInit {

  products: Product[] = [];

  constructor( private productDataService: ProductDataService ) { }

  ngOnInit() {
    this.productDataService
      .getAllProducts()
      .subscribe(
        (item) => {
          this.products = item;
        }
      );
  }

}
