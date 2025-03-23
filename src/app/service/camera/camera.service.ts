import { Injectable } from '@angular/core';
import { MediaCapture, MediaFile, CaptureVideoOptions, CaptureError } from '@awesome-cordova-plugins/media-capture/ngx';


@Injectable({
  providedIn: 'root'
})
export class CameraService {

  constructor(
    private mediaCapture: MediaCapture
  ) { }

  async recordVideo(){
    try {
      const options: CaptureVideoOptions = {
        limit: 1,
        duration: 60, 
        quality: 1,
      };

      const videoData= await this.mediaCapture.captureVideo(options);
      console.log(videoData)
      // const videoPath = videoData.fullPath;
      // console.log('Video path:', videoPath);
      // return videoPath;
    } catch (error) {
      console.error('Gagal merekam video:', error);
      // return null;
    }
  }

}
