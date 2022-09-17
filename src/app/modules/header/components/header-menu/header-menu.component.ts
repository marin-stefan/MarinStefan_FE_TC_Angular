import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountModel } from 'src/app/modules/auth/interfaces/accountModel';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {

  public loggedAccount: AccountModel;

  constructor(
    private authService : AuthService, 
    private router : Router
  ) { }

  ngOnInit(): void {
    this.getLoggedAccountInfo()
  };

  public logOutUser():void{
    // calls the logout function in auth which changes the variable that guard service needs and thus route is not authorized
    this.authService.logOut();
    // and navigate to login
    this.router.navigateByUrl('/login')
  };

  getLoggedAccountInfo():void{
    // populates the variable with the info needed
    this.loggedAccount = this.authService.currentLoggedAccount;
  };

}
