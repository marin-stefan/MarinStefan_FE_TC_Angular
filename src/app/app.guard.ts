import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, CanActivate, RouterStateSnapshot, UrlTree, CanActivateChild, CanLoad, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './modules/auth/services/auth.service';
import { EditUserShellComponent } from './modules/user/containers/edit-user-shell/edit-user-shell.component';

@Injectable({
  providedIn: 'root'
})
export class AppGuard implements CanActivate, CanActivateChild, CanLoad, CanDeactivate<EditUserShellComponent>{

  constructor(
    private router: Router, 
    private authService : AuthService,
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      if(this.authService.checkForAnyLoggedUser()){ //this returns boolean and we can authorize routes
        return true
      }else {
        window.alert("Please Log In")
        this.router.navigate(['login']) // after submit - redirect to login
      }
  };

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.authService.checkForAnyLoggedUser()){ //this returns boolean and we can authorize routes
        return true
      }else {
        window.alert("Please Log In") 
        this.router.navigate(['login'])  // after submit - redirect to login
      }
  };

  canLoad(){
    if(this.authService.checkForAnyLoggedUser()){ //this returns boolean and we can authorize routes
      return true
    }else {
      window.alert("Please Log In")
      this.router.navigate(['login'])  // after submit - redirect to login
    }
  }

  canDeactivate(
    component: EditUserShellComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(component.isFormvalid()){
      return true
    }else{
      window.confirm("Unsaved changes")
      return false
    }
  }
  
}
