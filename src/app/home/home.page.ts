import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { environment } from 'src/environments/environment';
import { AngularFireDatabase } from '@angular/fire/compat/database';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  
  constructor(private db: AngularFireDatabase){}



  latitude:number = 0;
  longitude:number = 0;

  getMyLocation = async () =>{
    let coordinates = await Geolocation.getCurrentPosition();
    this.latitude = coordinates.coords.latitude
    this.longitude = coordinates.coords.longitude
    console.log('Current position:', coordinates);
    console.log(environment.firebaseConfig.apiKey)
  }

  playAlarm(){
    const alarm = new Audio("../../assets/audio/alarm.mp3")
    alarm.play()
  }

  
}
