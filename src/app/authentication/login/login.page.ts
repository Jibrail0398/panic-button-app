import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private route:Router,
    private alertctrl:AlertController
  ) { }

  ngOnInit() {
  }

  handphone:string = "";

  async sendOTP(){
    if(this.handphone.startsWith("08")){
      this.handphone = "628"+this.handphone.slice(2)
    }
  
    const url = environment.url+"/api/user/otp/sen"

    
    const alert = await this.alertctrl.create({
      header:"berhasil dikirim",
      buttons:['ok']
    })

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

      await alert.present()

      localStorage.setItem("handphone",this.handphone)
      console.log(data);
      this.route.navigate(['/otp']);
    }
    catch(e){
      const alert = await this.alertctrl.create({
        header:"gagal dikirim",
        buttons:['ok']
      })
      await alert.present()
      console.error(e)
    }
  }

}
