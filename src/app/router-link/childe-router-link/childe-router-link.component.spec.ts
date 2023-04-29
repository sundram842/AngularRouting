import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildeRouterLinkComponent } from './childe-router-link.component';

describe('ChildeRouterLinkComponent', () => {
  let component: ChildeRouterLinkComponent;
  let fixture: ComponentFixture<ChildeRouterLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildeRouterLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildeRouterLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
