import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Platform } from '@ionic/angular';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class GoogleLoginService {
  user: Observable<firebase.User>;

  constructor(
    private gPlus: GooglePlus,
    private platform: Platform,
    private ngAuth: AngularFireAuth
  ) {
    this.user = this.ngAuth.authState;
  }

  signIn(): Promise<any> {
    if (this.platform.is('cordova')) {
      return this.nativeGoogleLogin();
    } else {
      return this.googleWebLogin();
    }
  }

  signOut(): Promise<any> {
    if (this.platform.is('cordova')) {
      return this.gPlus.logout();
    } else {
      return this.ngAuth.auth.signOut();
    }
  }

  private async nativeGoogleLogin(): Promise<any> {
    try {
      // TODO: pegar as credencias da API qnd o google liberar.
      const googleUser = await this.gPlus.login({
        webClientId: '284943082995-2l5h7ija16gc2m921it1ut9fn95qb8as.apps.googleusercontent.com',
        offline: true
      });

      return await this.ngAuth.auth.signInWithCredential(
        firebase.auth.GoogleAuthProvider.credential(googleUser.idToken)
      );

    } catch (err) {
      throw new Error(err);
    }
  }

  private async googleWebLogin(): Promise<any> {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await this.ngAuth.auth.signInWithPopup(provider);

      return credential.user;

    } catch (err) {
      throw new Error(err);
    }
  }
}
