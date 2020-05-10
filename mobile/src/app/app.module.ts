import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Camera } from '@ionic-native/camera/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { GooglePlus } from '@ionic-native/google-plus/ngx';

const firebaseConfig = {
  apiKey: 'AIzaSyCjSZb2H6fk6J-3kax-JaLk7Fec8IWhZLM',
  authDomain: 'smartice-project.firebaseapp.com',
  databaseURL: 'https://smartice-project.firebaseio.com',
  projectId: 'smartice-project',
  storageBucket: 'smartice-project.appspot.com',
  messagingSenderId: '881344772486',
  appId: '1:881344772486:web:b71662f353d2b3981b1407',
  measurementId: 'G-CYZSMSB06Z'
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    GooglePlus,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
