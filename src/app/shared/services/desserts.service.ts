import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDessert } from '../models/dessert.model';

@Injectable({
  providedIn: 'root',
})
export class DessertsService {

  url: string = 'http://localhost:3000/desserts';

  constructor(private http: HttpClient) { }
  
  getDesserts(): Observable<IDessert[]> { 
    return this.http.get<IDessert[]>(this.url);
  }


}
