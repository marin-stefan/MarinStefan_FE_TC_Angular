import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './modules/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AppGuardGuard implements CanActivate {

  constructor(private router: Router, private authService : AuthService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      if(this.authService.checkForAnyLoggedUser()){ //this returns boolean and we can authorize routes
        return true
      }else {
        window.alert("Please Log In")
        this.router.navigateByUrl('/login'); // after submit - redirect to login
        return false;
      }
  }
  
}
