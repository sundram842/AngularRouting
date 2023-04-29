import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryPramsComponent } from './query-prams.component';

describe('QueryPramsComponent', () => {
  let component: QueryPramsComponent;
  let fixture: ComponentFixture<QueryPramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryPramsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryPramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
