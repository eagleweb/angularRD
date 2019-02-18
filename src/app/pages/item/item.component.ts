import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class ItemComponent implements OnInit, OnDestroy {

  private id: number;
  private subscriptions: Subscription = new Subscription();
  private product: Product = { id: 0, quantity: 1, imgUrl: '', name: '', desc: '', price: null, sizeSelected: 's' };
  public selectedSize: string;
  public selectedQuantity: number;

  constructor( private activateRoute: ActivatedRoute, private apiService: ApiService, private cartService: CartService) {
    this.subscriptions.add(activateRoute.params.subscribe(params => this.id = params.id));
  }

  ngOnInit() {
    this.apiService.getProduct(this.id)
      .subscribe(res => {
        this.product = res;
      }, err => {
        console.log(err);
      });
  }

  public addToCart(product: Product) {
    this.product.quantity = this.selectedQuantity;
    this.product.sizeSelected = this.selectedSize;
    this.cartService.addItemToCart(product);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
