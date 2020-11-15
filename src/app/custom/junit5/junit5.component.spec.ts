import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Junit5Component } from './junit5.component';

describe('Junit5Component', () => {
  let component: Junit5Component;
  let fixture: ComponentFixture<Junit5Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Junit5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Junit5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
