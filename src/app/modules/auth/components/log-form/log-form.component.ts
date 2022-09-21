import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../../services/account.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

  @Input() functionality : string;
  public theForm: FormGroup;

  constructor(
    private accountService : AccountService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.buildTheForm();
  };

  //builds the form
  public buildTheForm():void{
    this.theForm = new FormGroup ({
      userName : new FormControl('', Validators.required),
      userPass : new FormControl('', Validators.required),
      // userPassConfirm : new FormControl('', Validators.required, this.confirmPassword.bind(this)   ) // custom val here!!
    })
    if(this.functionality === 'register'){
      this.theForm.addControl('userPassConfirm', new FormControl('', Validators.required, this.confirmPassword.bind(this)));
    }
  };

  //getters
  get userUserName() {return this.theForm.get('userName') };
  get userUserPass() {return this.theForm.get('userPass') };
  get userUserPassConfirm() {return this.theForm.get('userPassConfirm') };

  public logIn():void{
    // calling auth service function to check credentials which returns true of false and also changes the value
    //for the authservice that describes if any user is logged so that guard knows to authorize or not routes
    if(this.accountService.attemptLogin(this.theForm.value)){
      this.router.navigateByUrl('/users')
    }else{
      alert('user or password incorrect, please try again')
      this.theForm.reset();
    }
  }

  public register():void{
    //takes the info and sends it to auth service to be checked and stored then navigate to users page
    if(!this.accountService.checkUsername(this.theForm.value.userName)){
      this.accountService.saveAccount(this.theForm.value)
      this.router.navigateByUrl('/users')
    }else {
      alert('Username is already in use')
      this.theForm.reset();
    }
  };

  public submitForm():void{
    // based on this.functionality ala ..inputul
    if(this.functionality === 'login'){
      this.logIn()
    } else if (this.functionality === 'register'){
      this.register()
    }
  };

  // for the register version checks if passwords are identical
  public confirmPassword(control:FormControl): Promise<any> | Observable<any>{
    const response = new Promise((resolve, reject)=> {
      setTimeout(()=>{
        if(control.value !== this.userUserPass.value){
          resolve({passNotAllowed: true})
        }else {
          resolve(null)
        }
      }, 1000)
    });
    return response;
  };

}
