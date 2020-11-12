import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApacheWebServerComponent } from './apache-web-server.component';

describe('ApacheWebServerComponent', () => {
  let component: ApacheWebServerComponent;
  let fixture: ComponentFixture<ApacheWebServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApacheWebServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApacheWebServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
