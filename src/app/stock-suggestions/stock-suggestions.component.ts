import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Observable } from 'rxjs/Observable';

import { SuggestedStock } from 'app/modal/suggested-stock';
import { StockSuggestionsService } from 'app/stock-suggestions/stock-suggestions.service';

@Component({
  selector: 'app-stock-suggestions',
  templateUrl: './stock-suggestions.component.html',
  styleUrls: ['./stock-suggestions.component.css']
})
export class StockSuggestionsComponent implements OnInit {

  suggestedStockForm: FormGroup;
  suggestedStock: SuggestedStock;

  stockListObservable: Observable<any>;

  constructor(private fb: FormBuilder, 
              private stockSuggestionsService: StockSuggestionsService) {
    this.createMemberAddForm();
  }

  ngOnInit() {
    this.suggestedStock = new SuggestedStock();
    this.getAllSuggestedStocks();
  }

  createMemberAddForm() {
    this.suggestedStockForm = this.fb.group({
      stockName: ['', Validators.required],
      suggestedBy: ['', Validators.required], 
      suggestedOn: '',
      suggestedPrice: ''
    });
  }

  onSubmit() {
    this.suggestedStock.stockName = this.suggestedStockForm.value.stockName;
    this.suggestedStock.suggestedBy = this.suggestedStockForm.value.suggestedBy;
    this.suggestedStock.suggestedOn = this.suggestedStockForm.value.suggestedOn;
    this.suggestedStock.suggestedPrice = this.suggestedStockForm.value.suggestedPrice;

    this.stockSuggestionsService.addStock(this.suggestedStock)
                                .subscribe(item => {
                                  this.suggestedStockForm.reset();
                                  this.getAllSuggestedStocks();
                                });
  }

  getAllSuggestedStocks() {
   this.stockListObservable = this.stockSuggestionsService.retrieveAllStocks();
  }

}
