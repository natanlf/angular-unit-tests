import { ProductService } from './product.service';
import { AppComponent } from './app.component';
import { TestBed } from '@angular/core/testing';
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Product } from "./product/product";
import { Sale } from "./product/sale";
import { By } from '@angular/platform-browser';

@Component({selector: 'app-product', template: ''})
class ProductStubComponent {
  @Input()
  product!: Product;

  @Output()
  sale: EventEmitter<Sale> = new EventEmitter();
};

describe('AppComponent', () => {

  const spy = jasmine.createSpyObj('ProductService', ['getProducts']); //it's necessary to mock service, name of class and method

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent, ProductStubComponent ],
      providers: [{provide: ProductService, useValue: spy}] //inject Service
    }).compileComponents();
  });

  it('should use mock ProductService', () => {
    const dummyProducts = [
      new Product("Prod1", "Cat1", 111),
      new Product("Prod2", "Cat2", 222)
    ];
    spy.getProducts.and.returnValue(dummyProducts);

    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const prods = fixture.debugElement.queryAll(By.css('app-product'));
    expect(prods.length).toBe(2);
  });
});
