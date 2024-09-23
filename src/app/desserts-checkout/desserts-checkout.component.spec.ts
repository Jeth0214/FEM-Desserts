import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DessertsCheckoutComponent } from './desserts-checkout.component';

describe('DessertsCheckoutComponent', () => {
  let component: DessertsCheckoutComponent;
  let fixture: ComponentFixture<DessertsCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DessertsCheckoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DessertsCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
