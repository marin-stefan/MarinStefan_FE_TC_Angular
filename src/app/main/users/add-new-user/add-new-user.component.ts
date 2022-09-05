import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserModel } from '../model/UserModel';
import { UserService } from '../user.service';



@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css'],
})
export class AddNewUserComponent implements OnInit{

  reactiveForm: FormGroup;
  
  
  constructor(private router:Router, private userService: UserService) { }
  
  ngOnInit(): void {
    
    this.reactiveForm = new FormGroup({
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
        ], this.checkEmailExist.bind(this)
      ),
      department: new FormControl('', 
        [
          Validators.required,
          Validators.minLength(2)
        ]
      ),
      gender: new FormControl('male', Validators.required),
      activated: new FormControl('true')
    });
  }

  get userFirstName() { return this.reactiveForm.get('firstName'); };
  get userLastName() { return this.reactiveForm.get('lastName'); };
  get userAge() { return this.reactiveForm.get('age') };
  get userCompany() { return this.reactiveForm.get('company') };
  get userEmail() { return this.reactiveForm.get('email') };
  get userDepartment() { return this.reactiveForm.get('department') };
  get userGender() { return this.reactiveForm.get('gender') };
  
  saveUser():void{
    this.userService.addNewUser(this.reactiveForm.value)
    this.router.navigate(['/home'])
  }

  
  // custom async validator
  checkEmailExist(control:FormControl): Promise<any> | Observable<any>{
    let users: UserModel[] = this.userService.getUsers();
    
    let duplicateEmail = false
    users.map((user)=> {
      if(user.email === control.value){
        duplicateEmail = true
      }
    })
    

    const response = new Promise((resolve, reject)=> {
      setTimeout(()=>{
        if(duplicateEmail){
          resolve({emailNotAllowed: true})
        }else {
          resolve(null)
        }
      }, 1000)
    });
    return response;
  }


}
