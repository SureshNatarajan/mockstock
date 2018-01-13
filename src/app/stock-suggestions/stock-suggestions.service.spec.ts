import { TestBed, inject } from '@angular/core/testing';

import { StockSuggestionsService } from './stock-suggestions.service';

describe('StockSuggestionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StockSuggestionsService]
    });
  });

  it('should be created', inject([StockSuggestionsService], (service: StockSuggestionsService) => {
    expect(service).toBeTruthy();
  }));
});
