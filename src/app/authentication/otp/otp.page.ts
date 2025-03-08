import { Component, OnInit,ElementRef } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {

  constructor(
    private route:Router
  ) { }

  ngOnInit() {
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
      input.value = inputValue.slice(0, 1);
      
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
    const allDigit = `${this.digit1Value}${this.digit2Value}${this.digit3Value}${this.digit4Value}${this.digit5Value}${this.digit6Value}`;

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
      console.log(data)
      console.log(allDigit)
      
    }catch(e){
      console.log(e)
    }
  }

}
