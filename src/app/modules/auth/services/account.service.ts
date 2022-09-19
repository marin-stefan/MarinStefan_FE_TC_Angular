import { Injectable } from '@angular/core';
import { AccountModel } from '../interfaces/accountModel';
import { LoginModel } from '../interfaces/loginModel';
import { RegisterModel } from '../interfaces/registerModel';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  public currentLoggedAccount : AccountModel;
  public accounts : AccountModel[] = [
    {
      id: 1,
      username: 'user1',
      password: 'pass1'
    },
    {
      id: 2,
      username: 'user2',
      password: 'pass2'
    }
  ];

  constructor(private authService : AuthService) { }

  public attemptLogin(user:LoginModel):boolean{
    //checks user and pass at login in the main accounts array
    const account = this.accounts.find(el => ( (el.username === user.userName)&&(el.password === user.userPass)   ))
    if(account){
      // this.isAnyUserLogged = true;
      this.authService.logIn();
      this.currentLoggedAccount = account
      return true
    } else return false
  };

  public attemptlogout():void{
    this.authService.logOut();
    this.currentLoggedAccount = null; // empties out the variable since no account is logged 
  };

  public checkUsername(username:string):boolean{
    // checks if username already exists
    let response = false;
    this.accounts.map((account)=> {
      if(account.username === username){
        response = true
      }
    })
    return response
  };

  saveAccount(user:RegisterModel):void{
    // saves new account to the main array
    const newAccount:AccountModel = {
      id : 3,
      username : user.userName,
      password : user.userPass
    }
    this.accounts.push(newAccount)
    this.authService.logIn(); // change the value for the guard service to authorize routes
    this.currentLoggedAccount = newAccount; // updates the value with the current logged user
  };


}
