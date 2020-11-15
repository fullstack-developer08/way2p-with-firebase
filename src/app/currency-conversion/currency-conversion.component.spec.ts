import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CurrencyConversionComponent } from './currency-conversion.component';

describe('CurrencyConversionComponent', () => {
  let component: CurrencyConversionComponent;
  let fixture: ComponentFixture<CurrencyConversionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyConversionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
