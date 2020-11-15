import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewChildComponent } from './view-child.component';

describe('ViewChildComponent', () => {
  let component: ViewChildComponent;
  let fixture: ComponentFixture<ViewChildComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
