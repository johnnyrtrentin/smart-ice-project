import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DeviceService } from '../services/device.service';
import { LocationService } from '../services/location.service';
import { GoogleMapsService } from '../services/google-maps.service';
import { GoogleLoginService } from '../services/google-login.service';

import { IDevice } from '../models/device.model';
import { UserService } from '../services/user.service';
import { ILocationUser } from '../models/location.model';

@Component({
  selector: 'app-location-user',
  templateUrl: 'location-user.component.html',
  styleUrls: ['location-user.component.scss'],
})
export class LocationUserComponent implements OnInit, AfterViewInit, OnDestroy {
  hour: string;
  minute: string;
  result: string;
  finalHour: number;
  actualDate: any;
  finalMinute: number;

  userName: string;
  classRoom: string;

  timeout: any;
  CALL_TIMEOUT = 300000;

  arrivalForecast: Observable<string>;

  constructor(
    private userService: UserService,
    private deviceService: DeviceService,
    private locationService: LocationService,
    private googleLoginService: GoogleLoginService,
    public googleMapsService: GoogleMapsService
  ) { }

  ngOnInit() {
    this.getRouteDuration();
    this.saveUserRoute();
  }

  ngAfterViewInit() {
    this.timeout = setInterval(() =>
      this.saveUserRoute,
      this.CALL_TIMEOUT
    );
  }

  ngOnDestroy() {
    clearInterval(this.timeout);
  }

  getRouteDuration(): void {
    this.googleMapsService.finalDuration.subscribe(() => {
      this.arrivalForecast = of(this.displayArrivalForecast(
        this.googleMapsService.finalDuration.getValue()
      ));
    });
  }

  saveUserRoute(): void {
    let userLocation: object;

    this.googleLoginService.user.subscribe(user => {
      if (user) {
        this.userName = user.displayName;

        if (
          this.googleMapsService.finalDistance.getValue() &&
          this.googleMapsService.finalDuration.getValue()
        ) {
          userLocation = {
            name: this.userName,
            distance: this.googleMapsService.finalDistance.getValue(),
            arrivalForecast: this.result,
            trajectoryTime: this.googleMapsService.finalDuration.getValue(),
            userRealTime: this.actualDate,
          };

          this.locationService
            .saveUserLocation(userLocation)
            .subscribe(() => this.verifyClassRoom());
        }
      }
    });
  }

  verifyClassRoom(): void {
    this.userService.getUserInfo(this.userName).subscribe(user => {
      if (user) {
        this.classRoom = user.classRoom;
        this.verifyArrivalForecast();
      }
    });
  }

  verifyArrivalForecast(): void {
    const allUserHours = [];
    let firstUser: ILocationUser;

    this.locationService.getAllLocations().subscribe(locations => {
      locations.forEach(user => {
        allUserHours.push(this.convertStringHourToNumber(user.name, user.arrivalForecast));
      });

      if (allUserHours) {
        const minorUserHour = Math.min.apply(Math, [...allUserHours].map(v => v.hour));
        firstUser = allUserHours.find(u => u.hour = minorUserHour);
      }
    });

    this.turnOnAirConditioner(firstUser);
  }

  turnOnAirConditioner(firstUser: ILocationUser): void {
    if (firstUser && firstUser.name) {
      let lastUser: ILocationUser;

      this.deviceService.getDevice(this.classRoom).subscribe(device => {
        if (!device.status) {

          const newStatus: IDevice = {
            classroom: this.classRoom,
            status: true
          };

          this.deviceService
            .updateDevice(newStatus)
            .subscribe(() => lastUser = firstUser);
        }
      });
    }
  }

  convertStringHourToNumber(userName: string, userHour: string): object {
    let hour: number;
    let minute: number;

    if (userHour.length >= 21) {
      hour = parseInt(userHour.slice(0, 2), 0);
      minute = parseInt(userHour.slice(11, 13), 0);

      return {
        userName,
        hour: hour + minute
      };

    } else if (userHour.length <= 10) {
      minute = parseInt(userHour.slice(0, 2), 0);

      return {
        userName,
        hour: -minute
      };
    }
  }

  displayArrivalForecast(googleDate: string): string {
    this.actualDate = new Date();

    if (googleDate.length === 17 || googleDate.length === 15) {
      this.hour = googleDate.slice(0, 1);
      this.minute = googleDate.length === 17
        ? googleDate.slice(7, 9)
        : googleDate.slice(7, 8);

      this.finalHour = (this.actualDate.getHours() + (parseInt(this.hour, 0)));
      this.finalMinute = (this.actualDate.getMinutes() + parseInt(this.minute, 0));

      this.actualDate.setHours(this.finalHour, this.finalMinute);

      const dateString = this.actualDate.toLocaleString();
      const hourAndMinute = dateString
        .split(' ')[1]
        .split(':');

      const result = `${hourAndMinute[0]} horas e ${hourAndMinute[1]} minutos`;
      return result;

    } else if (googleDate.length === 10 || googleDate.length <= 9) {
      this.minute = googleDate.length === 10
        ? googleDate.slice(0, 2)
        : googleDate.slice(0, 1);

      this.finalMinute = (this.actualDate.getMinutes() + parseInt(this.minute, 0));

      this.actualDate.setMinutes(this.finalMinute);
      const dateString = this.actualDate.toLocaleString();
      const minute = dateString
        .split(' ')[1]
        .split(':');

      this.result = `${this.actualDate.getHours()} horas e ${minute[1]} minutos`;
      return this.result;

    }
  }
}
