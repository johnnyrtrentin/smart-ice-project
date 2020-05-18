import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { finalize } from 'rxjs/operators';

import { UserService } from '../services/user.service';
import { DeviceService } from '../services/device.service';
import { GoogleLoginService } from '../services/google-login.service';

import { UserData } from '../models/user-data.model';
import { IDevice } from '../models/device.model';

@Component({
  selector: 'app-dice-user',
  templateUrl: 'info-user.component.html',
  styleUrls: ['info-user.component.scss'],
})
export class InfoUserComponent implements OnInit {
  userForm: FormGroup;
  model: UserData = new UserData();

  loadingButton: boolean;

  constructor(
    private route: Router,
    private userService: UserService,
    private loginService: GoogleLoginService,
    private deviceService: DeviceService
  ) { }

  ngOnInit(): void {
    this.form();
  }

  form(): void {
    this.userForm = new FormGroup({
      course: new FormControl(this.model.course, Validators.required),
      class: new FormControl(this.model.class, Validators.required),
      discipline: new FormControl(this.model.discipline, Validators.required),
      classRoom: new FormControl(this.model.classRoom, Validators.required),
      exitTime: new FormControl(this.model.exitTime, Validators.required)
    });
  }

  get course() { return this.userForm.get('course'); }

  get class() { return this.userForm.get('class'); }

  get discipline() { return this.userForm.get('discipline'); }

  get classRoom() { return this.userForm.get('classRoom'); }

  get exitTime() { return this.userForm.get('exitTime'); }

  submitData(): void {
    this.loadingButton = true;

    this.loginService.user.subscribe(loggedUserData => {
      if (loggedUserData) {
        const userPayload = {
          name: loggedUserData.displayName,
          course: this.course.value,
          class: this.class.value,
          discipline: this.discipline.value,
          classRoom: this.classRoom.value,
          exitTime: this.exitTime.value
        };

        this.saveUserInfo(userPayload);
      }
    });
  }

  saveUserInfo(userPayload: object): void {
    this.userService
      .saveUserInfo(userPayload)
      .subscribe(userData => {
        if (UserData) {
          this.loadingButton = false;
          this.route.navigateByUrl('/location-user');
        }
      });
  }
}
