import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private route:Router
  ) { }

  ngOnInit() {
  }

  handphone:string = "";

  async sendOTP(){
    if(this.handphone.startsWith("08")){
      this.handphone = "628"+this.handphone.slice(2)
    }
    
    const url = environment.url+"/api/user/otp/send"
    try{
      const response = await fetch(url,{
        method:"POST",
        body:JSON.stringify({
          phone_number:this.handphone
        }),
        headers:{
          "Content-type":"application/json",
          "X-API-KEY":environment.apiKey,
        }
      });
      const data = await response.json();
      localStorage.setItem("handphone",this.handphone)
      console.log(data);
      this.route.navigate(['/otp']);
    }
    catch(e){
      console.error(e)
    }
  }

}
