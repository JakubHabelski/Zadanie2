import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:8080/currencies/get-current-currency-value-command';

  constructor(private http: HttpClient) { }

  sendData(data: any): Observable<any>{
    return this.http.post<any>(this.apiUrl, data);
  }
}
