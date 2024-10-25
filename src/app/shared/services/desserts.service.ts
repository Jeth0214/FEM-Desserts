import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDessert } from '../models/dessert.model';

@Injectable({
  providedIn: 'root',
})
export class DessertsService {

  url: string = 'api/desserts';

  constructor(private http: HttpClient) { }
  
  getDesserts(): Observable<IDessert[]> { 
    return this.http.get<IDessert[]>(this.url);
  }


}
