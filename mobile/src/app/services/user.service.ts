import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'https://stark-taiga-93289.herokuapp.com/';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    const getUsers = 'api/user/all';
    return this.http.get(`${this.url}${getUsers}`);
  }
}
