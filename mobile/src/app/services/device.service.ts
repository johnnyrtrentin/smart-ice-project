import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDevice } from '../models/device.model';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private apiURL = 'https://stark-taiga-93289.herokuapp.com';
  private deviceEndpoint = 'api/device';

  constructor(private http: HttpClient) { }

  getDevice(room: string): Observable<IDevice> {
    return this.http.get<IDevice>(
      `${this.apiURL}/${this.deviceEndpoint}?classroom=${room}`
    );
  }

  saveDevice(payload: IDevice): Observable<IDevice> {
    return this.http.post<IDevice>(`${this.apiURL}/${this.deviceEndpoint}`, payload);
  }

  updateDevice(payload: IDevice): Observable<IDevice> {
    return this.http.put<IDevice>(
      `${this.apiURL}/${this.deviceEndpoint}?classroom=${payload.classroom}`, payload
    );
  }
}
