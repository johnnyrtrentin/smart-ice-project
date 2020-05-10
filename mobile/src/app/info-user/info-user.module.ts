import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { InfoUserComponent } from './info-user.component';

const route: Routes = [
  { path: '', component: InfoUserComponent}
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(route)
  ],
  declarations: [ InfoUserComponent ]
})
export class DiceUserPageModule { }
