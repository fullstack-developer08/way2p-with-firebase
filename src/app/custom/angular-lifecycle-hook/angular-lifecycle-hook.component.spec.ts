import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularLifecycleHookComponent } from './angular-lifecycle-hook.component';

describe('AngularLifecycleHookComponent', () => {
  let component: AngularLifecycleHookComponent;
  let fixture: ComponentFixture<AngularLifecycleHookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularLifecycleHookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularLifecycleHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
