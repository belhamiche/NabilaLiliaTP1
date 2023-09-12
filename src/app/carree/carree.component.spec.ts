import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarreeComponent } from './carree.component';

describe('CarreeComponent', () => {
  let component: CarreeComponent;
  let fixture: ComponentFixture<CarreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarreeComponent]
    });
    fixture = TestBed.createComponent(CarreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
