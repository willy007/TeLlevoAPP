import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private router: Router){}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ):Promise<boolean> {
      return await this.checkAuth();
    }

  private async checkAuth() {

    /*
    let id = window.localStorage.getItem("id_usuario");
    if (id === null){
      return true
    }else{
      this.router.navigate(['/home-page']);
      return false
    }
    */
   
    return true;
    
  }
  
}
