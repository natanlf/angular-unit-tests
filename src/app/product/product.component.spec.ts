import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Product } from './product';

import { ProductComponent } from './product.component';
import { Sale } from './sale';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  let product: Product; //ready to pass into a ProductComponent

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;

    // Mock of product supplied by the parent component
    product = new Product('Keyboard Corsair', 'computer', 220);

    // Simulate the parent setting the input property with that product
    component.product = product;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render product details', () => {
    const componentElement: HTMLElement = fixture.nativeElement;
    //get all children of class product
    const divChildren = componentElement.querySelectorAll('.product > *');

    expect(divChildren[0]?.textContent).toMatch('Keyboard Corsair');
    expect(divChildren[1]?.textContent).toMatch('computer');
    expect(divChildren[2]?.textContent).toMatch('220');
  });

  it('should emit a sale event when button clicked', () => {
    let saleEmitted!: Sale;
    component.sale.subscribe( (sale: Sale) => saleEmitted = sale );

    const componentElement: HTMLElement = fixture.nativeElement;
    const button = componentElement.querySelector('button');
    button?.click();
    expect(saleEmitted?.productDescription).toBe('Keyboard Corsair');
    expect(saleEmitted?.quantity).toBe(1);
  });
});
