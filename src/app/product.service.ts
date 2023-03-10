import { Injectable } from '@angular/core';
import { Product } from './product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts() : Array<Product> {
    return [
      new Product('UHDTV', 'TV/Audio', 1800),
      new Product('Skis', 'Sports equipment', 350),
      new Product('Ski boots', 'Sports equipment', 150)
    ];
  }
}
