import { Component, OnInit, Input } from '@angular/core';
import {  FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { UserModel } from '../../interfaces/user-model';

@Component({
  selector: 'app-user-basic',
  templateUrl: './user-basic.component.html',
  styleUrls: ['./user-basic.component.css']
})

export class UserBasicComponent implements OnInit {

  public basicInfoForm: FormGroup; // declaring the form

  @Input() parentForm: FormGroup ; //our parent form
  @Input() user: UserModel; // user object input for the edit-user to prefill inputs
  
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    // at init we generate the form and add it's controls to the parentform
    this.buildBasicInfoForm();
    this.parentForm.addControl('basicUserInfo', this.basicInfoForm);
    this.user? this.patchForm(this.user) : null // if user obj present then we prefill inputs
  };

  // generating our parent form
  public buildBasicInfoForm(): void{
    this.basicInfoForm = new FormGroup({
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
          ],this.checkmyemail.bind(this)
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

  // getters
  get userFirstName() {return this.basicInfoForm.get('firstName')};
  get userLastName() {return this.basicInfoForm.get('lastName')};
  get userAge() {return this.basicInfoForm.get('age')};
  get userCompany() {return this.basicInfoForm.get('company')};
  get userEmail() {return this.basicInfoForm.get('email')};
  get userDepartment() {return this.basicInfoForm.get('department')};
  get userGender() {return this.basicInfoForm.get('gender')};


  // checking if email is duplicate,accounting for the edit-user where the email should already be present
  public checkmyemail(control:FormControl): Promise<any> | Observable<any>{
    let isEmailDuplicate: boolean
    if(this.user){ // for the edit - we need to discard our own email..and check only the other emails
      isEmailDuplicate = this.userService.checkDuplicateEmail(control.value, this.user.id)
    }else{ // checks all emails for duplicates
      isEmailDuplicate = this.userService.checkDuplicateEmail(control.value)
    };
    const response = new Promise((resolve, reject)=> {
      setTimeout(()=>{
        if(isEmailDuplicate){
          resolve({emailNotAllowed: true})
        }else {
          resolve(null)
        }
      }, 2000)
    });
    return response;
  };

  // populates the form with data from the user with that certain id
  public patchForm(targetUser:UserModel):void{
      this.basicInfoForm.patchValue({
          firstName : targetUser.firstName,
          lastName : targetUser.lastName,
          age : targetUser.age,
          company : targetUser.company,
          email: targetUser.email,
          department : targetUser.department,
          gender : targetUser.gender,
          activated : targetUser.activated,
      })
    };
}

  