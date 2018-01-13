import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockSuggestionsComponent } from './stock-suggestions.component';

describe('StockSuggestionsComponent', () => {
  let component: StockSuggestionsComponent;
  let fixture: ComponentFixture<StockSuggestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockSuggestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
