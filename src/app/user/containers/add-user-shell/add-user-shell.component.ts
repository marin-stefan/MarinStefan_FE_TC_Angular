import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { UserModel } from '../../interfaces/user-model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-add-user-shell',
  templateUrl: './add-user-shell.component.html',
  styleUrls: ['./add-user-shell.component.css']
})
export class AddUserShellComponent implements OnInit {

  reactiveForm: FormGroup<any>;

  constructor(
    private router:Router, 
    private userService: UserService,
    private fb : FormBuilder
  ){ }

  ngOnInit(): void {
    this.buildForm();

    // this.reactiveForm = new FormGroup({
    //   firstName: new FormControl('', Validators.required),
    //   lastName: new FormControl('', Validators.required),
    //   age: new FormControl('', 
    //     [
    //       Validators.required,
    //       Validators.min(15),
    //       Validators.max(100)
    //     ]
    //   ),
    //   company: new FormControl('', 
    //     [
    //       Validators.required,
    //       Validators.maxLength(35)
    //     ]
    //   ),
    //   email: new FormControl('', 
    //     [
    //       Validators.required, 
    //       Validators.email,
    //       Validators.pattern("^[a-z0-9._%+-]+@gmail.com$")
    //     ], this.checkEmailExist.bind(this)
    //   ),
    //   department: new FormControl('', 
    //     [
    //       Validators.required,
    //       Validators.minLength(2)
    //     ]
    //   ),
    //   gender: new FormControl('male', Validators.required),
    //   activated: new FormControl('true')
    // });
  };

  private buildForm() {
    this.reactiveForm = this.fb.group({
      basicInfo: this.fb.group({
        firstName: [, [Validators.required]],
        lastName: [, [Validators.required]],
        age: [, 
          [
            Validators.required, 
            Validators.min(15), 
            Validators.max(100)
          ]
        ],
        company: [, 
          [
            Validators.required, 
            Validators.maxLength(35)
          ]
        ],
        email: [, 
          [
            Validators.required, 
            Validators.email, 
            Validators.pattern("^[a-z0-9._%+-]+@gmail.com$"), 
            this.checkEmailExist.bind(this)
          ]
        ],
        department: [, 
          [
            Validators.required, 
            Validators.minLength(2)
          ]
        ],
        gender: [, [Validators.required]],
        activated: ['true']
      }),
      // address: this.fb.group({
      //   street: [, [Validators.required]],
      //   number: [, [Validators.required, Validators.min(0)]],
      //   postal: [, [Validators.required]],
      //   country: [,
      //     [ 
      //       Validators.required, 
      //       Validators.minLength(2), 
      //       Validators.maxLength(15)
      //     ]
      //   ]
      // })
    });
  }  
  
  get basicInfo() {return this.reactiveForm.get('basicInfo') as FormGroup}
  // get addresses() {return this.reactiveForm.get('addresses') as FormGroup}
  // get userFirstName() { return this.reactiveForm.get('firstName') as FormControl; };
  // get userLastName() { return this.reactiveForm.get('lastName') as FormControl };
  // get userAge() { return this.reactiveForm.get('age') as FormControl};
  // get userCompany() { return this.reactiveForm.get('company') as FormControl};
  // get userEmail() { return this.reactiveForm.get('email') as FormControl};
  // get userDepartment() { return this.reactiveForm.get('department') as FormControl};
  // get userGender() { return this.reactiveForm.get('gender') as FormControl};
  
  saveUser():void{
    this.userService.addNewUser(this.reactiveForm.value);
    this.router.navigate(['/home']);
  };

  // custom async validator
  checkEmailExist(control:FormControl): Promise<any> | Observable<any>{
    let users: UserModel[] = this.userService.getUsers();
    
    let duplicateEmail = false;
    users.map((user)=> {
      if(user.email === control.value){
        duplicateEmail = true
      }
    });
    

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
  };

}
