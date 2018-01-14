import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class MemberService {

  //private mongoDbApiEndpoint = 'http://localhost:3000/api/'

  private mongoDbApiEndpoint = environment.mockStockMemberApi;

  constructor(private http: HttpClient) { }

  createMember(newMember) {
    let headers = new HttpHeaders();
    headers.append('content-type', 'application-json');
    return this.http.post(this.mongoDbApiEndpoint + '/mockStockMember', 
                          newMember, 
                          { headers: headers });
  }

  retrieveAllMembers() {
    return this.http.get(this.mongoDbApiEndpoint + '/mockStockMembers');
  }

}
