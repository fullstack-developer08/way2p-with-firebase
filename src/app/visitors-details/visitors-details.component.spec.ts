import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VisitorsDetailsComponent } from './visitors-details.component';

describe('VisitorsDetailsComponent', () => {
  let component: VisitorsDetailsComponent;
  let fixture: ComponentFixture<VisitorsDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitorsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
