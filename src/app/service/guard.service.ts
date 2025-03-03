import { Injectable } from '@angular/core';
import { CanActivate,Router,ActivatedRouteSnapshot } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(
    private alertctrl:AlertController,
    private router:Router
  ) { }

  async canActivate(route:ActivatedRouteSnapshot): Promise<boolean>{

    let token = localStorage.getItem('token')


    if(!token){

      const alert = await this.alertctrl.create({
        header:"Silahkan login terlebih dahulu",
        buttons:["OK"],
      });
      await alert.present()
      await alert.onDidDismiss().then(()=>{

        this.router.navigate(['/login'])
      });
      
      return false
    }

    return true
  }


}
