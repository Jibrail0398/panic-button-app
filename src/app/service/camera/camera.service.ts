import { Injectable } from '@angular/core';
import { MediaCapture } from '@whiteguru/capacitor-plugin-media-capture';


@Injectable({
  providedIn: 'root'
})
export class CameraService {

  constructor(
    
  ) { }

  async recordVideo() {
    try{
      const videoResult = await MediaCapture.captureVideo({
        duration:60,
        quality:"hd",
        frameRate:30,
      });
      return videoResult
    }catch(error){
      console.log('Error capturing video:', error);
      return null
    }
  }

}
