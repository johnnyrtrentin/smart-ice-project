import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { GoogleMapsComponent } from '../google-maps/google-maps.component';

@NgModule({
  imports: [ CommonModule, IonicModule ],
  declarations: [ GoogleMapsComponent ],
  exports: [ GoogleMapsComponent ]
})
export class GoogleMapsModule {}
