import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../service/cart.service';
import {Product} from '../../../product';

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
