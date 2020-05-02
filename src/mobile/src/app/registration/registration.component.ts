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
  image: SafeValue;

  constructor(
    private route: Router,
    private camera: PhotoService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void { }

  registration(): void {
    this.route.navigateByUrl('/dice-user');
  }

  takePhoto(): void {
    this.camera.takePhoto().then(() => {
      this.loadPhoto();
    });
  }

  loadPhoto(): void {
    let photoPath;
    const photos = this.camera.photos.forEach(image => photoPath = image.webviewPath);

    this.image = this.sanitizer.bypassSecurityTrustUrl(photoPath);
    this.camera.photos = [];
  }
}
