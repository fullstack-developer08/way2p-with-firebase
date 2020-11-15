import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SchematicsLikeAngularCliComponent } from './schematics-like-angular-cli.component';

describe('SchematicsLikeAngularCliComponent', () => {
  let component: SchematicsLikeAngularCliComponent;
  let fixture: ComponentFixture<SchematicsLikeAngularCliComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SchematicsLikeAngularCliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchematicsLikeAngularCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
