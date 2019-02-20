import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import {Product} from '../../core/models/product.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() item: Product;

  constructor( private cartService: CartService ) { }

  ngOnInit() {
  }

  public addToCart(product: Product) {
    this.cartService.addItemToCart(product);
  }

}
