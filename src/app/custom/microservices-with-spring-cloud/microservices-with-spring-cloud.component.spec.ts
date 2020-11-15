import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MicroservicesWithSpringCloudComponent } from './microservices-with-spring-cloud.component';

describe('MicroservicesWithSpringCloudComponent', () => {
  let component: MicroservicesWithSpringCloudComponent;
  let fixture: ComponentFixture<MicroservicesWithSpringCloudComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MicroservicesWithSpringCloudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroservicesWithSpringCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
