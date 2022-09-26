import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  public logForm: FormGroup;

  @Input() parentForm: FormGroup ; //our parent form
  @Input() functionality : string;

  constructor() { }

  ngOnInit(): void {
    this.buildTheForm();
    this.parentForm.addControl('logForm', this.logForm);
  };

  //builds the form
  public buildTheForm():void{
    this.logForm = new FormGroup ({
      userName : new FormControl('', Validators.required),
      userPass : new FormControl('', Validators.required),
    })
    if(this.functionality === 'register'){
      this.logForm.addControl('userPassConfirm', new FormControl('', Validators.required, this.confirmPassword.bind(this)));
    }
  };

  //getters
  get userUserName() {return this.logForm.get('userName') };
  get userUserPass() {return this.logForm.get('userPass') };
  get userUserPassConfirm() {return this.logForm.get('userPassConfirm') };

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
