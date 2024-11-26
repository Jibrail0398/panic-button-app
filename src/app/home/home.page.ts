import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { FirebaseServiceService } from '../service/firebase-service.service';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs';


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
    
     

    //Buat Referensi Database ke ke trydata
    const dbRef = this.firebase.initDatabaseRef("trydata")
    let prevData:string="";

    //Nyalakan alarm jika ada data berubah, pada code ini tidak menggunakan isDatabaseChanged()
    let count = 0
    this.firebase.getDatabaseOnRef(dbRef).subscribe(
      (data)=>{
        if (count > 0) {
         this.playAlarm();
         console.log("data berubah menjadi:",data)
        }
        else{
          console.log("data belum berubah")
        }
        count+=1
      }
    ) 

   
    
    
  }


  // prevData:string="";
  

  latitude:number = 0;
  longitude:number = 0;

  items: any[] = [];
  newItem: any = {
    nama: ''
  };

  getMyLocation = async () =>{
    let coordinates = await Geolocation.getCurrentPosition();
    this.latitude = coordinates.coords.latitude
    this.longitude = coordinates.coords.longitude
    
  }


  playAlarm(){
    const alarm = new Audio("../../assets/audio/alarm.mp3")
    const play = alarm.play()
  }

  data:any;

  getData(){
    this.http.get("https://panic-button-database-default-rtdb.asia-southeast1.firebasedatabase.app/trydata.json").subscribe(response=>{
      if(response){
        this.data = response
      }
      console.log(this.data)
    });
  }
  
}
