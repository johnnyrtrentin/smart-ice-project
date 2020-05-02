import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SafeValue, DomSanitizer } from '@angular/platform-browser';

import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  image: any;

  constructor(
    private route: Router,
    private camera: PhotoService
  ) { }

  ngOnInit(): void { }

  registration(): void {
    this.route.navigateByUrl('/dice-user');
  }

  takePhoto(): void {
    this.camera.takePhoto().then(() => {
      this.image = this.camera.currentPhoto;
    });
  }
}
