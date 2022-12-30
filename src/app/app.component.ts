import { Sale } from './product/sale';
import { Component } from '@angular/core';
import { Product } from './product/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testingClassAndComponents';

  products: Array<Product> = [];
  sales: Array<string> = [];

  constructor() {
    this.products = [
      new Product("Notebook Dell", "Computers", 4500),
      new Product("Cellphone Samsung", "Eletronics", 1300),
      new Product("Camera Samsung", "Eletronics", 2700)
    ]
  }

  saleHandler(event: Sale) {
    const msg = `${event.productDescription} [${event.quantity}]`;
    this.sales.push(msg);
  }
}
