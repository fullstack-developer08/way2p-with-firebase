import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsInterviewQuesstionComponent } from './js-interview-quesstion.component';

describe('JsInterviewQuesstionComponent', () => {
  let component: JsInterviewQuesstionComponent;
  let fixture: ComponentFixture<JsInterviewQuesstionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsInterviewQuesstionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsInterviewQuesstionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
