import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {
  finalDistance = new BehaviorSubject<string>('');
  finalDuration = new BehaviorSubject<string>('');

  constructor() { }
}
