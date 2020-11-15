import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SpringBootRestfulWebserviceComponent } from './spring-boot-restful-webservice.component';

describe('SpringBootRestfulWebserviceComponent', () => {
  let component: SpringBootRestfulWebserviceComponent;
  let fixture: ComponentFixture<SpringBootRestfulWebserviceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringBootRestfulWebserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringBootRestfulWebserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
