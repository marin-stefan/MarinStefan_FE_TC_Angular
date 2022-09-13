import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { UserAddressComponent } from '../../components/user-address/user-address.component';
import { UserModel } from '../../interfaces/user-model';


@Component({
  selector: 'app-add-user-shell',
  templateUrl: './add-user-shell.component.html',
  styleUrls: ['./add-user-shell.component.css']
})
export class AddUserShellComponent implements OnInit {

  // declaring our contact form variable of type FormGroup
  public userContactForm : FormGroup;

  constructor(
    private router:Router, 
    private userService: UserService,
  ){ }

  ngOnInit(): void {
    this.generateUserContactForm();
    console.log(this.userContactForm.controls['contactInfo'].value)
    console.log(this.userContactForm?.get('addresses').value)
  };

 
  
  // generating our parent form
  public generateUserContactForm(): void{
    this.userContactForm = new FormGroup({
      contactInfo: new FormGroup({
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
      }),
        addresses : new FormArray ([
          UserAddressComponent.buildAddressItem()
        ])
        // addresses: new FormArray([])
        // new FormGroup({
        // //  UserAddressComponent.addAddressItem(),
        // street: new FormControl('', Validators.required),
        // city: new FormControl(''),
        // zip: new FormControl('')
        // })
    })
  }

  //build and returns a address form group with 3 form controls
  //  public buildAddressItem(): FormGroup {
  //   return new FormGroup ({
  //     street: new FormControl('', Validators.required),
  //     city: new FormControl(''),
  //     zip: new FormControl('')
  //   })
  // }

  //add another address field in the addresses FormArray
  public addAddressItem():void{
    let addressArray = this.userContactForm?.get('addresses') as FormArray
    addressArray?.push(UserAddressComponent.buildAddressItem())
  }

  // delete the address field
  public delAddressItem(index: number):void{
    let addressArray = this.userContactForm?.get('addresses') as FormArray
    addressArray?.removeAt(index)
  }

  // on form submit we create our user object from the values of the form and call userservice method to save user
  public submitForm():void{
    let contactInfo = this.userContactForm.controls['contactInfo'].value
    let contactAddressArray = this.userContactForm.value.addresses

    let newUser:UserModel = {
      id: 30 ,
      firstName: contactInfo.firstName ,
      lastName: contactInfo.lastName ,
      age: contactInfo.age ,
      company: contactInfo.company ,
      department: contactInfo.department,
      gender: contactInfo.gender,
      email: contactInfo.email,
      address: contactAddressArray[0].street+", "+contactAddressArray[0].city+", "+contactAddressArray[0].zip ,
      activated: contactInfo.activated 
    }
    this.userService.addNewUser(newUser);
    this.router.navigate(['/users']); // after submit - redirect to users list page
  }
  
  // checking if email is duplicate
  public checkmyemail(control:FormControl): Promise<any> | Observable<any>{
    const isEmailDuplicate = this.userService.checkDuplicateEmail(control.value)
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
  }
  
}
