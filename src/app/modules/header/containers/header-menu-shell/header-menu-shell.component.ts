import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountModel } from 'src/app/modules/auth/interfaces/accountModel';
import { AccountService } from 'src/app/modules/auth/services/account.service';

@Component({
  selector: 'app-header-menu-shell',
  templateUrl: './header-menu-shell.component.html',
  styleUrls: ['./header-menu-shell.component.css']
})
export class HeaderMenuComponent implements OnInit {

  public loggedAccount: AccountModel;

  constructor(
    private accountService : AccountService, 
    private router : Router
  ) { }

  ngOnInit(): void {
    this.getLoggedAccountInfo()
  };

  public logOutUser():void{
    // calls the logout function in auth which changes the variable that guard service needs and thus route is not authorized
    this.accountService.attemptlogout();
    // and navigate to login
    this.router.navigate(['login'])
  };

  getLoggedAccountInfo():void{
    // populates the variable with the info needed
    this.loggedAccount = this.accountService.currentLoggedAccount;
  };

}
