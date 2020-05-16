import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LocationUserComponent } from './location-user.component';

import { GoogleMapsModule } from '../google-maps/google-maps.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoogleMapsModule,
    RouterModule.forChild([
      {
        path: '',
        component: LocationUserComponent
      }
    ])
  ],
  declarations: [LocationUserComponent]
})
export class LocationUserPageModule {}
