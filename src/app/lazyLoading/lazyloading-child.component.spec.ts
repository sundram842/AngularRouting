import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyloadingChildComponent } from './lazyloading-child.component';

describe('LazyloadingChildComponent', () => {
  let component: LazyloadingChildComponent;
  let fixture: ComponentFixture<LazyloadingChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyloadingChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyloadingChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
