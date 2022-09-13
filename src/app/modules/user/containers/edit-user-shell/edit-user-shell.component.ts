import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user.service';
import { UserModel } from '../../interfaces/user-model';

@Component({
  selector: 'app-edit-user-shell',
  templateUrl: './edit-user-shell.component.html',
  styleUrls: ['./edit-user-shell.component.css']
})
export class EditUserShellComponent implements OnInit {

  public userContactForm : FormGroup;
  public userId : number ;

  constructor(
    private router: Router, 
    private userService: UserService,
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    // we get the user id from url
    this.userId = parseInt( this.activatedRoute.snapshot.paramMap.get('id'))
    // generates main form
    this.generateUserContactForm();
    // prepopulate form with the user's info
    this.populateForm(this.userId)
  }

  // builds the main form
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
        // addresses : new FormArray ([
        //   UserAddressComponent.buildAddressItem()
        // ])
    })
  }

  // async email validator ..calls userservice method and based on that answer resolves answer
  public checkmyemail(control:FormControl): Promise<any> | Observable<any>{
    const isEmailDuplicate = this.userService.checkDuplicateEmailatEdit(control.value, this.userId)
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

  // populates the form with data from the user with that certain id
  populateForm(id:number):void{
    const users = this.userService.getUsers()
    const targetUser = (users.filter((user)=>user.id === id))[0]
    this.userContactForm.patchValue({
      contactInfo: {
        firstName : targetUser.firstName,
        lastName : targetUser.lastName,
        age : targetUser.age,
        company : targetUser.company,
        email: targetUser.email,
        department : targetUser.department,
        gender : targetUser.gender,
        activated : targetUser.activated
      }
    })
  }

  // build the edited user obj based on the UserModel and calls userservice method to update in main db users array
  public submitChanges():void{
    let contactInfo = this.userContactForm.controls['contactInfo'].value
    // let contactAddressArray = this.userContactForm.value.addresses

    let newUser:UserModel = {
      id: this.userId,
      firstName: contactInfo.firstName ,
      lastName: contactInfo.lastName ,
      age: contactInfo.age ,
      company: contactInfo.company ,
      department: contactInfo.department,
      gender: contactInfo.gender,
      email: contactInfo.email,
      // address: contactAddressArray[0].street+", "+contactAddressArray[0].city+", "+contactAddressArray[0].zip ,
      address: 'testing testing',
      activated: contactInfo.activated 
    }
    // this.userService.addNewUser(newUser);
    this.userService.editUser(newUser);
    this.router.navigate(['/users']); // after submit - redirect to users list page
  }

}
