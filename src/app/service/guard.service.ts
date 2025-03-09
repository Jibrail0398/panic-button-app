import { Injectable } from '@angular/core';
import { CanActivate,Router,ActivatedRouteSnapshot } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(
    
    private storage:Storage,
    private router:Router
  ) { }

  async canActivate(route:ActivatedRouteSnapshot): Promise<boolean>{

    let token = await this.storage.get("token")


    if(!token){

      this.router.navigate(['/login'])
      return false
    }

    return true
  }


}
