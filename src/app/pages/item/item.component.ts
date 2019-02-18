import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from '../../shared/service/api.service';
import { CartService } from '../../shared/service/cart.service';
import { Product } from '../../product';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  private id: number;
  private subscription: Subscription;
  product: Product = { id: 0, imgUrl: '', name: '', desc: '', price: null };
  isLoadingResults = true;

  constructor( private activateRoute: ActivatedRoute, private apiService: ApiService, private cartService: CartService) {
    this.subscription = activateRoute.params.subscribe(params => this.id = params.id);
  }

  ngOnInit() {
    this.apiService.getProduct(this.id)
      .subscribe(res => {
        this.product = res;
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

  public addToCart(product: Product) {
    this.cartService.addItemToCart(product);
  }

}
