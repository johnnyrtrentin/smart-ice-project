import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {
  finalDistance: Observable<string>;
  finalDuration: Observable<string>;

  constructor() { }
}
