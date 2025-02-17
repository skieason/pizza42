import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  ping$(): Observable<any> {
    console.log(environment.apiUri);
    return this.http.get(`${environment.apiUri}api/external`);
  }

  order$(sub, orders): Observable<any> {
    return this.http.post(`${environment.apiUri}api/${sub}/order`, orders)
  }
}
