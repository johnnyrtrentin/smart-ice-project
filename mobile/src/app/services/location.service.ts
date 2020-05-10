import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private apiURL = 'https://stark-taiga-93289.herokuapp.com';
  private locationEndpoint = 'api/user/location';

  constructor(private http: HttpClient) { }

  getUserLocation(): Observable<any> {
    return this.http.get(`${this.apiURL}/${this.locationEndpoint}`);
  }

  saveUserLocation(payload: object): Observable<any> {
    return this.http.post(`${this.apiURL}/${this.locationEndpoint}`, payload);
  }

  editUserLocation(payload: object): Observable<any> {
    return this.http.put(`${this.apiURL}/${this.locationEndpoint}`, payload);
  }
}
