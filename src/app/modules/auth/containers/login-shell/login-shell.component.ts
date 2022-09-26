import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-login-shell',
  templateUrl: './login-shell.component.html',
  styleUrls: ['./login-shell.component.css']
})
export class LoginShellComponent implements OnInit {

  public parentLogForm = new FormGroup({});

  constructor(
    private accountService : AccountService,
    private router : Router
  ) { }

  ngOnInit(): void {
  };

  
  public logIn():void{
    // calling auth service function to check credentials which returns true of false and also changes the value
    //for the authservice that describes if any user is logged so that guard knows to authorize or not routes
    if(this.accountService.attemptLogin(this.parentLogForm.value['logForm'])){
      this.router.navigate(['users'])
    }else{
      alert('user or password incorrect, please try again')
      this.parentLogForm.reset();
    }
  };

}
