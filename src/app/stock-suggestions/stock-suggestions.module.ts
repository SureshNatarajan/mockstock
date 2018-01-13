import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockSuggestionsComponent } from './stock-suggestions.component';
import { StockSuggestionsService } from './stock-suggestions.service';

@NgModule({
  imports: [ CommonModule ],
  exports: [ StockSuggestionsComponent ],
  providers: [ StockSuggestionsService ],
  declarations: [ StockSuggestionsComponent ]
})
export class StockSuggestionsModule { }
