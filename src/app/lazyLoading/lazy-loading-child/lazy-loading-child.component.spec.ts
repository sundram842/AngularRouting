import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadingChildComponent } from './lazy-loading-child.component';

describe('LazyLoadingChildComponent', () => {
  let component: LazyLoadingChildComponent;
  let fixture: ComponentFixture<LazyLoadingChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyLoadingChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyLoadingChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
