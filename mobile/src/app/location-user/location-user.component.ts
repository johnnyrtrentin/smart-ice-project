import { Component, OnInit } from '@angular/core';
import { GoogleMapsService } from '../services/google-maps.service';

@Component({
  selector: 'app-location-user',
  templateUrl: 'location-user.component.html',
  styleUrls: ['location-user.component.scss'],
})
export class LocationUserComponent implements OnInit {
  constructor(public googleMapsService: GoogleMapsService) {}

  ngOnInit() { }
}
