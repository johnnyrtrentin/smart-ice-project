import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiURL = 'https://stark-taiga-93289.herokuapp.com';
  private userEndpoint = 'api/user';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.apiURL}/${this.userEndpoint}/all`);
  }

  getUserInfo(name: string): Observable<any> {
    return this.http.get(`${this.apiURL}/${this.userEndpoint}?name=${name}`);
  }

  saveUserInfo(payload: object): Observable<any> {
    return this.http.post(`${this.apiURL}/${this.userEndpoint}`, payload);
  }

  editUserInfo(payload: object): Observable<any> {
    return this.http.put(`${this.apiURL}/${this.userEndpoint}`, payload);
  }
}
