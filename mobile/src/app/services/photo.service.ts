import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public currentPhoto: any;

  constructor(private camera: Camera) { }

  async takePhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: this.camera.PictureSourceType.CAMERA,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      saveToPhotoAlbum: true
    };

    await this.camera.getPicture(options).then((imageData) => {
      this.currentPhoto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {});
  }
}
