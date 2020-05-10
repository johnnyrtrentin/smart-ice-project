import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { GoogleLoginService } from './services/google-login.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  isUserLogged: Observable<boolean>;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private loginGoogle: GoogleLoginService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    this.loginGoogle.user.subscribe(user =>
      user ? this.isUserLogged = of(true) : this.isUserLogged = of(false));
  }

  logOut(): void {
    this.loginGoogle.signOut().then(() =>
      this.isUserLogged = of(false));
  }
}
