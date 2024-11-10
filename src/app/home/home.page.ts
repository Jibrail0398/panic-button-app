import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  
  constructor() {}
  
  latitude:number = 0;
  longitude:number = 0;

  getMyLocation = async () =>{
    let coordinates = await Geolocation.getCurrentPosition();
    this.latitude = coordinates.coords.latitude
    this.longitude = coordinates.coords.longitude
    console.log('Current position:', coordinates);
  }
  
  
}
