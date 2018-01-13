import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class StockSuggestionsService {

  private mongoDbApiEndpoint = 'http://localhost:3000/api/mockStock/'

  constructor(private http: HttpClient) { }

  addStock(stock) {
    let headers = new HttpHeaders();
    headers.append('content-type', 'application-json');
    return this.http.post(this.mongoDbApiEndpoint + 'suggestStock', 
                          stock, 
                          { headers: headers });
  }

  retrieveAllStocks() {
    return this.http.get(this.mongoDbApiEndpoint + 'suggestStocks');
  }

}
