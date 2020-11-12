import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringBootCurdWithMysqlComponent } from './spring-boot-curd-with-mysql.component';

describe('SpringBootCurdWithMysqlComponent', () => {
  let component: SpringBootCurdWithMysqlComponent;
  let fixture: ComponentFixture<SpringBootCurdWithMysqlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringBootCurdWithMysqlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringBootCurdWithMysqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
