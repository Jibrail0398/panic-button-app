import { Component, OnInit } from '@angular/core';
import { CameraService } from 'src/app/service/camera/camera.service';

@Component({
  selector: 'app-panic-button',
  templateUrl: './panic-button.page.html',
  styleUrls: ['./panic-button.page.scss'],
})
export class PanicButtonPage implements OnInit {

  constructor(
    private camera:CameraService 
  ) { }

  ngOnInit() {
  }

  async recordVideo(){
    const videoPath = await this.camera.recordVideo();
  }

}
