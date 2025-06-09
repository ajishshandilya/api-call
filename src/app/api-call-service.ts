import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './User-model';


@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  API_URL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.API_URL).pipe(map(response => response));
  }
}
