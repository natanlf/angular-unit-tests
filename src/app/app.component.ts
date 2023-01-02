import { ChuckService } from './chuck.service';
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

  constructor(private productService: ProductService, private chuckService: ChuckService) {
    this.products = this.productService.getProducts();
    this.getRandom();
  }

  saleHandler(event: Sale) {
    const msg = `${event.productDescription} [${event.quantity}]`;
    this.sales.push(msg);
  }

  getRandom() {
    this.chuckService.getRandom().subscribe(
      {
        next: (resp) => console.log(resp),
        error: (error) => console.log(error)
      }
    );
  }
}
