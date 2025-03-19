import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private route:Router
  ) { }

  ngOnInit() {
    this.getProvince()
    
  }

  //semua properti input
  name:string = "";
  handphone:string = "";
  dateBirth:string = "";
  gender:string = "";
  provinceKTP: { id: string, name: string } | null = null
  kabupatenKTP:{id:string,name:string} | null = null
  provinceDomicile:{ id: string, name: string } | null = null
  kabupatenDomicile:{ id: string, name: string } | null = null
  provinceData:{ id: string; name: string }[] = []
  kabupatenData :{id:string,name:string}[] = []
  kabupatenDataDomicile : {id:string,name:string}[] = []
  isSameWithKTP:boolean = false;

  async onChangeProvince(domicile:boolean){
    if(this.provinceKTP?.id && domicile === false){
      this.kabupatenData = await this.getCity(this.provinceKTP.id)
    }else if(this.provinceDomicile?.id && domicile === true){
      this.kabupatenDataDomicile = await this.getCity(this.provinceDomicile.id)
    }
  }


  isSame(){
    if(this.isSameWithKTP === false){
      this.provinceDomicile = this.provinceKTP;
      this.kabupatenDomicile = this.kabupatenKTP;
      this.isSameWithKTP = !this.isSameWithKTP;
      
    }else{
      this.isSameWithKTP = !this.isSameWithKTP;
      this.provinceDomicile = null;
      this.kabupatenDomicile = null;
    }
  }

  async getProvince(){
    try {
      const response = await fetch('https://open-api.my.id/api/wilayah/provinces');
      const provinces = await response.json();
      this.provinceData = provinces;
      
    }catch (error) {
      console.error('Error fetching provinces:', error);
    }
  }

  async getCity(code:string){
    
    try{
      const response = await fetch(`https://open-api.my.id/api/wilayah/regencies/${code}`)
      const city = await response.json()
      return city
      
    }catch(e){
      console.error("Error fetching city:",e)
    }
  }

  async onregis(){
    
    let handphone = this.handphone.toString()
    if(handphone.startsWith("08")){
      handphone = "628"+handphone.slice(2)
    }


    const dataSend = {
      phone_number:handphone,
      full_name : this.name,
      birth_date : this.dateBirth,
      gender:this.gender,
      address:this.kabupatenKTP?.name + "," + this.provinceKTP?.name,
      domicile:this.kabupatenDomicile?.name + "," + this.provinceDomicile?.name
    }
    
    
    const url:string = `${environment.url}/api/user/auth/register`;
    
    try{
      const response = await fetch(url,{
        method:"POST",
        body:JSON.stringify(dataSend),
        headers:{
          "Content-type":"application/json",
          "X-API-KEY":environment.apiKey,
        }
      })
      console.log(environment.apiKey)
      const data = await response.json();
      
      if(response.ok){
        localStorage.setItem("handphone",dataSend.phone_number)
        this.route.navigate(["/otp"])
      }
      
    }catch(e){
      console.log(e)
    }



  }

}
