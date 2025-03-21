import { Injectable } from '@angular/core';
import { CanActivate,Router,ActivatedRouteSnapshot } from '@angular/router';
import { IonicstorageService } from './ionicstorage.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(
    
    private storage:IonicstorageService,
    private router:Router
  ) { }

  async canActivate(route:ActivatedRouteSnapshot): Promise<boolean>{

    let token = await this.storage.get("token")
    

    if(!token){
      console.log("Token tidak ditemukan, mengarahkan ke halaman login");
      this.router.navigate(['/login'])
      return false
    }

    return true
  }


}
