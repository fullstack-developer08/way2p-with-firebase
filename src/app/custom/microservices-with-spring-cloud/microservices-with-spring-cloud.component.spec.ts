import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroservicesWithSpringCloudComponent } from './microservices-with-spring-cloud.component';

describe('MicroservicesWithSpringCloudComponent', () => {
  let component: MicroservicesWithSpringCloudComponent;
  let fixture: ComponentFixture<MicroservicesWithSpringCloudComponent>;

  beforeEach(async(() => {
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
