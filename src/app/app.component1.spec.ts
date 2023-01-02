import { AppComponent } from './app.component';
import { TestBed } from '@angular/core/testing';
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Product } from "./product/product";
import { Sale } from "./product/sale";
import { HttpClientTestingModule } from '@angular/common/http/testing';

@Component({selector: 'app-product', template: ''}) //It's necessary to inject app-product
class ProductStubComponent {
  @Input()
  product!: Product;

  @Output()
  sale: EventEmitter<Sale> = new EventEmitter();
};

describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent, ProductStubComponent ],
      imports: [
        HttpClientTestingModule
      ]
    }).compileComponents();
  });

  it('should have injected ProductService', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
