import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {

  constructor(
    private storage:Storage ,
    private router:Router,
    private alertctrl:AlertController
  ) { }

  async ngOnInit() {
    await this.storage.create();
    console.log(await this.storage.get("token"))
  }

  handphone = localStorage.getItem("handphone")

  digit1Value:string = ""
  digit2Value:string = ""
  digit3Value:string = ""
  digit4Value:string = ""
  digit5Value:string = ""
  digit6Value:string = ""

  moveToNext(nextInput: any, event: any) {
    const input = event.target;
    const inputValue = input.value;
    
    // Pastikan input hanya berisi satu digit
    if (inputValue && inputValue.length > 0) {
      // Batasi input ke satu karakter
      if (inputValue.length > 1) {
        input.value = inputValue.slice(-1);
        
      }
      
      // Jika nextInput tidak null, pindahkan fokus ke input berikutnya
      if (nextInput) {
        setTimeout(() => {
          nextInput.focus();
        }, 0);
      }
    }
  }

  
  async verifyOTP(){

   
    const url = environment.url+"/api/user/auth/login";
    const allDigit = `${this.digit1Value.toString().slice(-1)}${this.digit2Value.toString().slice(-1)}${this.digit3Value.toString().slice(-1)}${this.digit4Value.toString().slice(-1)}${this.digit5Value.toString().slice(-1)}${this.digit6Value.toString().slice(-1)}`;

    console.log(allDigit)    
    

    try{
      const response = await fetch(url,{
        method:"POST",
        body:JSON.stringify({
          phone_number:this.handphone,
          otp:allDigit
        }),
        headers:{
          "Content-type":"application/json",
          "X-API-KEY":environment.apiKey,
        }
      });
  
      const data = await response.json()
      await this.storage.set("token",data.token)
      this.router.navigate(['/home'])
      console.log(data)
      
    }catch(e){
      console.log(e)
    }
  }

  async resend(){
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
      if(response.ok){
        const alert = await this.alertctrl.create({
          header:"Send OTP Success",
          message:data.otp,
          buttons:['ok']
        });
        await alert.present();
      }
      
    }
    catch(e){
      console.error(e)
    }
  }

}
