import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy,
  AfterViewInit
} from '@angular/core';

import { Geolocation, GeolocationOptions } from '@ionic-native/geolocation/ngx';
import { Platform } from '@ionic/angular';

import { GoogleMapsService } from '../services/google-maps.service';

import { google } from 'google-maps';

declare var google: google;

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss'],
})
export class GoogleMapsComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('map', { static: true }) mapElement: ElementRef<HTMLDivElement>;

  map: any;
  startPosition: any;
  originPosition: any;
  destinationPosition = 'UNISOCIESC - Campus Marques de Olinda';

  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();

  // * 5 MINUTES
  CALL_TIMEOUT = 300000;
  googleAPI: any;

  constructor(
    public platform: Platform,
    private geolocation: Geolocation,
    private googleMapsService: GoogleMapsService
  ) { }

  ngOnInit() {
    this.initMap();
  }

  ngAfterViewInit() {
    this.googleAPI = setInterval(() =>
      this.initMap(),
      this.CALL_TIMEOUT
    );
  }

  ngOnDestroy() {
    clearInterval(this.googleAPI);
  }

  initMap() {
    const options: GeolocationOptions = {
      timeout: 5000,
      maximumAge: 0,
      enableHighAccuracy: true
    };

    this.geolocation.getCurrentPosition(options).then(response => {
      this.originPosition = new google.maps.LatLng(
        response.coords.latitude, response.coords.latitude
      );

      // this.originPosition = new google.maps.LatLng(-27.086275, -48.922176);

      const mapOptions: google.maps.MapOptions = {
        zoom: 5,
        center: this.originPosition,
        zoomControl: true,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.directionsDisplay.setMap(this.map);

      const marker: google.maps.Marker = new google.maps.Marker({
        map: this.map,
        position: this.originPosition
      });

      this.calculateRoute();

    }).catch(err => console.error(err));
  }

  calculateRoute() {
    if (this.destinationPosition && this.originPosition) {
      const request = {
        origin: this.originPosition,
        destination: this.destinationPosition,
        travelMode: 'DRIVING'
      };

      this.traceRoute(this.directionsService, this.directionsDisplay, request);
    }
  }

  traceRoute(service: any, display: any, request: any) {
    service.route(request, (result: any, status: any) => {

      if (status === 'OK') {
        result.routes.forEach(routeResult => {
          routeResult.legs.forEach(trajectory => {
            this.googleMapsService.finalDistance = trajectory.distance.text;
            this.googleMapsService.finalDuration = trajectory.duration.text;
          });
        });

        display.setDirections(result);
      }
    });
  }
}
