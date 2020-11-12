import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchematicsInAngularComponent } from './schematics-in-angular.component';

describe('SchematicsInAngularComponent', () => {
  let component: SchematicsInAngularComponent;
  let fixture: ComponentFixture<SchematicsInAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchematicsInAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchematicsInAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
