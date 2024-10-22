import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DessertCartComponent } from './dessert-cart.component';

describe('DessertCartComponent', () => {
  let component: DessertCartComponent;
  let fixture: ComponentFixture<DessertCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DessertCartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DessertCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
