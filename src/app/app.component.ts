import { ProductService } from './product.service';
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

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

  saleHandler(event: Sale) {
    const msg = `${event.productDescription} [${event.quantity}]`;
    this.sales.push(msg);
  }
}
