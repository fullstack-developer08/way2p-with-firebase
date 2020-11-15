import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FlexboxCourseComponent } from './flexbox-course.component';

describe('FlexboxCourseComponent', () => {
  let component: FlexboxCourseComponent;
  let fixture: ComponentFixture<FlexboxCourseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexboxCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexboxCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
