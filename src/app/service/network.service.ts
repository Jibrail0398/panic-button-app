import { Injectable } from '@angular/core';
import { Network } from '@capacitor/network';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(
    private router : Router,
    
  ) {
    this.listenNetworkChanges()
  }
  
  
  async listenNetworkChanges(){
    
    
    // const networkStatus = await Network.getStatus();
    // this.checkNetworkStatus(networkStatus.connected);
    
    Network.addListener('networkStatusChange',Status=>{
      let currentRoute:any= localStorage.getItem("currentRoute")
      
      if(Status.connected === true){
        this.checkNetworkStatus(Status.connected,currentRoute)
      }else{
        this.checkNetworkStatus(Status.connected)
      }
    })
    
  }
  checkNetworkStatus(connected:boolean,route?:string){
    if(!connected){
      this.router.navigate(['/offline-mode'])
    }else if(connected){
      this.router.navigate([route])
    }
  } 


}
