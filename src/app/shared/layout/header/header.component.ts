import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CartService } from '../../../core/services/cart/cart.service';
import { Product } from '../../../core/models/product.model';
import { AuthService } from '../../../core/services/auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public cart$: Observable<Product[]>;

  constructor( private cartService: CartService, private router: Router, public auth: AuthService) {
  }

  ngOnInit() {
    this.cart$ = this.cartService.getItems();
  }

  goToCart(): void {
    this.router.navigateByUrl('/cart');
  }

}
