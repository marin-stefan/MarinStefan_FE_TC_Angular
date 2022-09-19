import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAnyUserLogged : boolean = false;

  constructor() { }

  checkForAnyLoggedUser():boolean{
    // checks for the value of the boolean variable that is needed for the guard service
    return this.isAnyUserLogged;
  };

  logIn():void{
    //logs in
    this.isAnyUserLogged = true; // modify the isAnyUserLogged variable to true for the guard
  };

  logOut():void{
    // logs out account 
    this.isAnyUserLogged = false; // changes to false for guard service to not authorize any rout but login and register
  };

}


