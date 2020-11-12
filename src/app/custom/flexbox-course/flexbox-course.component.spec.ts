import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexboxCourseComponent } from './flexbox-course.component';

describe('FlexboxCourseComponent', () => {
  let component: FlexboxCourseComponent;
  let fixture: ComponentFixture<FlexboxCourseComponent>;

  beforeEach(async(() => {
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
