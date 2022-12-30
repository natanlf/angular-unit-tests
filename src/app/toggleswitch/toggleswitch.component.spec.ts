import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleswitchComponent } from './toggleswitch.component';

describe('ToggleswitchComponent', () => {
  let component: ToggleswitchComponent;
  let fixture: ComponentFixture<ToggleswitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleswitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ToggleswitchComponent off initially', () => {
    expect(component.isOn).toBe(false);
    expect(component.status).toBe('Toggleswitch is off');
    expect(component.buttonLabel).toBe('TURN ON')
  });

  it('ToggleswitchComponent is after 1 click', () => {
    component.clicked();
    expect(component.isOn).toBe(true);
    expect(component.status).toBe('Toggleswitch is on');
    expect(component.buttonLabel).toBe('TURN OFF');
  });

  it('ToggleswitchComponent is after 2 clicks', () => {
    component.clicked();
    component.clicked();
    expect(component.isOn).toBe(false);
    expect(component.status).toBe('Toggleswitch is off');
    expect(component.buttonLabel).toBe('TURN ON')
  });
});
