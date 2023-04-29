import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrizedRoutesComponent } from './parametrized-routes.component';

describe('ParametrizedRoutesComponent', () => {
  let component: ParametrizedRoutesComponent;
  let fixture: ComponentFixture<ParametrizedRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametrizedRoutesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParametrizedRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
