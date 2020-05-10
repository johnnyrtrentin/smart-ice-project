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
    private ngAuth: AngularFireAuth,
    private gPlus: GooglePlus,
    private platform: Platform
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
        webClientId: '',
        offline: true,
        scopes: ''
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
