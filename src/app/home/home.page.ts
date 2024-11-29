import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { FirebaseServiceService } from '../service/firebase-service.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  
  constructor(
    private firebase:FirebaseServiceService,
    private http:HttpClient,
    
  ){} 
  
  ngOnInit() {
    
    //Nyalakan alarm jika ada penambahan data, pada code ini tidak menggunakan isDatabaseChanged()
    
    const myUserId = environment.userId
    this.firebase.detectAddChanges("FireAccident").subscribe(
      (data)=>{

        //Kondisi agar ketika aplikasi pertama dibuka, alarm tidak nyala
        if (this.count === 0){
          setTimeout(()=>{
            this.count+=1
          },10)
          return
        }
        console.log("data ditambah")
        console.log("ini nilai count",this.count)
        if (this.count>0){
          if(myUserId !== data.id){
            
            this.latitude = data.latitude;
            this.longitude = data.longitude;
            this.userId = data.id;
            console.log("Alarm Menyala")
            this.playAlarm()
          }
        }
      }
    )
   
  }

  count = 0
  latitude:number = 0;
  longitude:number = 0;
  userId:string='';

  items: any[] = [];
  newItem: any = {
    nama: ''
  };

  playAlarm(){
    const alarm = new Audio("../../assets/audio/alarm.mp3")
    const play = alarm.play()
  }

 
  async panicButton(){
    //langsung insert data koordinat
    let coordinates = await Geolocation.getCurrentPosition();
    const latitudewillsend = coordinates.coords.latitude
    const longitudewillsend = coordinates.coords.longitude
    this.firebase.insertDatabaseOnRef("FireAccident",latitudewillsend,longitudewillsend)
  }

  
  
}
