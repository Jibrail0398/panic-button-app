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

      if(response.ok){

        const alert = await this.alertctrl.create({
          header:"berhasil dikirim",
          buttons:['ok']
        })
        await alert.present()
        localStorage.setItem("handphone",this.handphone)
        this.route.navigate(['/otp']);
      }
      const data = await response.json();
      
      const alert = await this.alertctrl.create({
        header:"gagal dikirim",
        message:data.message,
        buttons:['ok']
      })
      await alert.present()
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
