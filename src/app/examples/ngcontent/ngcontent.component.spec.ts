import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgcontentComponent } from './ngcontent.component';

describe('NgcontentComponent', () => {
  let component: NgcontentComponent;
  let fixture: ComponentFixture<NgcontentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NgcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
