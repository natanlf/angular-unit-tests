/*
  Test of header component
*/
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>; //ComponentFixture wraps a component

  beforeEach(async () => { //
    await TestBed.configureTestingModule({ //TestBed creates a test module (mock module), and tells about the HeaderComponent class
      declarations: [ HeaderComponent ]
    })
    .compileComponents(); //compileComponents compiles the HTMLtemplate into JavaScript code. For Each component in the test module. After this, it's possible to create instance of component
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent); //Ask TestBed to create an instance of our component, so we can test it. The component instance is actually wrapped in a ComponentFixture
    component = fixture.componentInstance; // Component instance
    fixture.detectChanges(); //Tell Angular to re-evaluate data binding expressions in the component's HTML template. Any change in HTML is possible to detect
  });

  it('should create', () => {
    expect(component).toBeTruthy(); //check if component exists
  });
});
