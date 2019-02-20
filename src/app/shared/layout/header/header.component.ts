import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CartService } from '../../../core/services/cart.service';
import { Product } from '../../../core/models/product.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public cart$: Observable<Product[]>;

  constructor( private cartService: CartService, private router: Router) {
    this.cart$ = this.cartService.getItems();
    this.cart$.subscribe();
  }

  ngOnInit() {
  }

  goToCart() {
    this.router.navigateByUrl('/cart');
  }

}
