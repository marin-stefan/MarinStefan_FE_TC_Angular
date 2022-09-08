import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-basic',
  templateUrl: './user-basic.component.html',
  styleUrls: ['./user-basic.component.css']
})
export class UserBasicComponent implements OnInit {

  @Input() public childContactInfoForm : FormGroup;

  @Output() public checkEmailEvent : EventEmitter<string> = new EventEmitter<string>();
  // static checkEmailEvent: any;
  

  constructor() { }

  ngOnInit(): void {
    
  }

  static addContactInfoItem(): FormGroup {
    return new FormGroup ({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      age: new FormControl('', 
        [
          Validators.required, 
          Validators.min(15), 
          Validators.max(100)
        ]
      ),
      company: new FormControl('', 
        [
          Validators.required, 
          Validators.maxLength(35)
        ]
      ),
      email: new FormControl('', 
        [
          Validators.required, 
          Validators.email, 
          Validators.pattern("^[a-z0-9._%+-]+@gmail.com$")
        ],this.checkmyemail
      ),
      department: new FormControl('',
        [
          Validators.required,
          Validators.minLength(2)
        ]
      ),
      gender: new FormControl('', Validators.required),
      activated: new FormControl('')
    })
  };

  get userFirstName() {return this.childContactInfoForm.get('firstName')};
  get userLastName() {return this.childContactInfoForm.get('lastName')};
  get userAge() {return this.childContactInfoForm.get('age')};
  get userCompany() {return this.childContactInfoForm.get('company')};
  get userEmail() {return this.childContactInfoForm.get('email')};
  get userDepartment() {return this.childContactInfoForm.get('department')};
  get userGender() {return this.childContactInfoForm.get('gender')};



  static checkmyemail(control:FormControl): Promise<any> | Observable<any>{
    // this.checkEmailEvent.next(control.value)

    let duplicateEmail = false
    // here need to ask parent if email is duplicate..and change duplicateemail value based on answer
    
    const response = new Promise((resolve, reject)=> {
      setTimeout(()=>{
        if(duplicateEmail){
          resolve({emailNotAllowed: true})
        }else {
          resolve(null)
        }
      }, 2000)
    });
    return response;
  }




  public checkEmailInParent (email: string){
    this.checkEmailEvent.next(email);
  }

}
