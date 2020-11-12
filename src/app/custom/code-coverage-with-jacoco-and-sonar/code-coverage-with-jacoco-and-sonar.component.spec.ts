import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeCoverageWithJacocoAndSonarComponent } from './code-coverage-with-jacoco-and-sonar.component';

describe('CodeCoverageWithJacocoAndSonarComponent', () => {
  let component: CodeCoverageWithJacocoAndSonarComponent;
  let fixture: ComponentFixture<CodeCoverageWithJacocoAndSonarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeCoverageWithJacocoAndSonarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeCoverageWithJacocoAndSonarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
