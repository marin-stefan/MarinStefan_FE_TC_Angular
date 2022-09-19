import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private accountService : AccountService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.generateLoginForm();
  };

  //builds the form
  public generateLoginForm():void{
    this.loginForm = new FormGroup({
      userName: new FormControl ('', Validators.required),
      userPass: new FormControl ('', Validators.required)
    })
  };

  //getters
  get userUserName() {return this.loginForm.get('userName')};
  get userUserPass() {return this.loginForm.get('userPass')};

  public submitLoginForm():void{
    // calling auth service function to check credentials which returns true of false and also changes the value
    //for the authservice that describes if any user is logged so that guard knows to authorize or not routes
    if(this.accountService.attemptLogin(this.loginForm.value)){
      this.router.navigateByUrl('/users')
    }else{
      alert('user/pass incorrect')
      this.loginForm.reset();
    }
  };

}
