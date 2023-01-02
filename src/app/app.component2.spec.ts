import { ChuckService } from './chuck.service';
import { ProductService } from './product.service';
import { AppComponent } from './app.component';
import { TestBed } from '@angular/core/testing';
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Product } from "./product/product";
import { Sale } from "./product/sale";
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Component({selector: 'app-product', template: ''})
class ProductStubComponent {
  @Input()
  product!: Product;

  @Output()
  sale: EventEmitter<Sale> = new EventEmitter();
};

describe('AppComponent', () => {

  const spy = jasmine.createSpyObj('ProductService', ['getProducts']); //it's necessary to mock service, name of class and method
  const spyChuck = jasmine.createSpyObj('ChuckService', ['getRandom']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent, ProductStubComponent ],
      providers: [
        {provide: ProductService, useValue: spy},
        {provide: ChuckService, useValue: spyChuck}
      ] //inject Services
    }).compileComponents();
  });

  it('should use mock ProductService', () => {
    const dummyProducts = [
      new Product("Prod1", "Cat1", 111),
      new Product("Prod2", "Cat2", 222)
    ];
    spy.getProducts.and.returnValue(dummyProducts);

    const dummyChuck = Observable.create([
      {
        categories: [
          "movie"
        ],
        created_at: "2020-01-05 13:42:29.855523",
        icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
        id: "dJQ2OqkBQPqfksj9maoxYQ",
        updated_at: "2020-01-05 13:42:29.855523",
        url: "https://api.chucknorris.io/jokes/dJQ2OqkBQPqfksj9maoxYQ",
        value: "Chuck Norris can beat Arnie in an Arnold Schwarzenegger Impersonation contest."
      }
    ]);
    spyChuck.getRandom.and.returnValue(dummyChuck);

    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const prods = fixture.debugElement.queryAll(By.css('app-product'));
    expect(prods.length).toBe(2);
  });
});
