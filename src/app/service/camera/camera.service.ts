import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';


@Injectable({
  providedIn: 'root'
})
export class CameraService {

  constructor() { }

  async recordVideo() {
    try {
      const video = await Camera.getPhoto({
        source: CameraSource.Camera,
        resultType: CameraResultType.Uri,
        
      });
      const videoPath = video.path || video.webPath;
      return videoPath;
    } catch (error) {
      console.error('Gagal merekam video:', error);
      return null;
    }
  }

}
