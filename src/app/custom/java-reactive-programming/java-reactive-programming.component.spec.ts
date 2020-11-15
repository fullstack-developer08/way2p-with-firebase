import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { JavaReactiveProgrammingComponent } from './java-reactive-programming.component';

describe('JavaReactiveProgrammingComponent', () => {
  let component: JavaReactiveProgrammingComponent;
  let fixture: ComponentFixture<JavaReactiveProgrammingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JavaReactiveProgrammingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaReactiveProgrammingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
