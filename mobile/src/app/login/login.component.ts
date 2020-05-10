import { Component, OnInit } from '@angular/core';

import { GoogleLoginService } from '../services/google-login.service';
import { IUserInfo } from '../models/user-info.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginPageComponent implements OnInit {
  user: IUserInfo;

  constructor(
    private googleLogin: GoogleLoginService,
    private route: Router
  ) { }

  ngOnInit() { }

  login(): void {
    this.googleLogin.signIn().then(() => {
      this.googleLogin.user.subscribe(userInfo => {

        if (userInfo) {
          this.user = {
            email: userInfo.email,
            displayName: userInfo.displayName,
            emailVerified: userInfo.emailVerified,
            isAnonymous: userInfo.isAnonymous
          };

          this.route.navigateByUrl('/location-user');
        }
      });
    });
  }
}
