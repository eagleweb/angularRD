import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() item: Product;

  constructor() { }

  ngOnInit() {
  }

}
