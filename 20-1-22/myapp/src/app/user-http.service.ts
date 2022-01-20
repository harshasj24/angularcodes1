import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserHttpService {
  constructor(private http: HttpClient) {}
  getdata() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
