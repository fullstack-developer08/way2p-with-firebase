import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlogDataComponent } from './blog-data.component';

describe('BlogDataComponent', () => {
  let component: BlogDataComponent;
  let fixture: ComponentFixture<BlogDataComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
