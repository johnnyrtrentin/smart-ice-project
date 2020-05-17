import { Component, OnInit } from '@angular/core';
import { GoogleMapsService } from '../services/google-maps.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-location-user',
  templateUrl: 'location-user.component.html',
  styleUrls: ['location-user.component.scss'],
})
export class LocationUserComponent implements OnInit {
  hour: string;
  minute: string;
  result: string;
  finalHour: number;
  finalMinute: number;

  arrivalForecast: Observable<string>;

  constructor(public googleMapsService: GoogleMapsService) { }

  ngOnInit() {
    this.googleMapsService.finalDuration.subscribe(() => {
      this.arrivalForecast = of(this.displayArrivalForecast(
        this.googleMapsService.finalDuration.getValue()
      ));
    });
  }

  displayArrivalForecast(googleDate: string): string {
    const actualDate = new Date();

    if (googleDate.length >= 17 || googleDate.length === 15) {
      this.hour = googleDate.slice(0, 1);
      this.minute = googleDate.length === 17
        ? googleDate.slice(7, 9)
        : googleDate.slice(7, 8);

      this.finalHour = (actualDate.getHours() + (parseInt(this.hour, 0)));
      this.finalMinute = (actualDate.getMinutes() + parseInt(this.minute, 0));

      actualDate.setHours(this.finalHour, this.finalMinute);

      const dateString = actualDate.toLocaleString();
      const hourAndMinute = dateString
        .split(' ')[1]
        .split(':');

      const result = `${hourAndMinute[0]} horas e ${hourAndMinute[1]} minutos`;
      return result;

    } else if (googleDate.length === 10 || googleDate.length === 9) {
      this.minute = googleDate.length === 10
        ? googleDate.slice(0, 2)
        : googleDate.slice(0, 1);

      this.finalMinute = (actualDate.getMinutes() + parseInt(this.minute, 0));

      actualDate.setMinutes(this.finalMinute);
      const dateString = actualDate.toLocaleString();
      const minute = dateString
        .split(' ')[1]
        .split(':');

      this.result = `${actualDate.getHours()} horas e ${minute[1]} minutos`;
      return this.result;

    }
  }
}
