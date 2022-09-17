import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;

  constructor(
    private authService : AuthService,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.buildRegisterForm();
  };

  //builds the form
  public buildRegisterForm():void{
    this.registerForm = new FormGroup ({
      userName : new FormControl('', Validators.required),
      userPass : new FormControl('', Validators.required),
      userPassConfirm : new FormControl('', Validators.required, this.confirmPassword.bind(this)   ) // custom val here!!
    })
  };

  //getters
  get userUserName() {return this.registerForm.get('userName') };
  get userUserPass() {return this.registerForm.get('userPass') };
  get userUserPassConfirm() {return this.registerForm.get('userPassConfirm') };

  public submitRegisterForm():void{
    //takes the info and sends it to auth service to be checked and stored then navigate to users page
    if(!this.authService.checkUsername(this.registerForm.value.userName)){
      this.authService.saveAccount(this.registerForm.value)
      this.router.navigateByUrl('/users')
    }else {
      alert('Username is already in use')
      this.registerForm.reset();
    }



  }

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
  }

}
