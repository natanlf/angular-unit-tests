import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from './product';
import { Sale } from './sale';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  product!: Product;

  @Output()
  sale: EventEmitter<Sale> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  clicked() {
    let eventData: Sale = {
      productDescription: this.product.description,
      quantity: 1
    }
    this.sale.emit(eventData);
  }

}
