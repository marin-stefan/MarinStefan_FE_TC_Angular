import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { UserAddressComponent } from '../../components/user-address/user-address.component';
import { UserBasicComponent } from '../../components/user-basic/user-basic.component';
import { UserModel } from '../../interfaces/user-model';


@Component({
  selector: 'app-add-user-shell',
  templateUrl: './add-user-shell.component.html',
  styleUrls: ['./add-user-shell.component.css']
})
export class AddUserShellComponent implements OnInit {

  userContactForm : FormGroup;

  constructor(
    private router:Router, 
    private userService: UserService,
  ){ }

  ngOnInit(): void {
    this.generateUserContactForm();
  };
  
  public generateUserContactForm(): void{
    this.userContactForm = new FormGroup({
      contactInfo: new FormArray([
        UserBasicComponent.addContactInfoItem()
      ]),
      addresses: new FormArray([
        UserAddressComponent.addAddressItem(),
      ])
    })
  }

  public addAddressItem():void{
    let addressArray = this.userContactForm.get('addresses') as FormArray
    addressArray?.push(UserAddressComponent.addAddressItem())
  }

  public delAddressItem(index: number):void{
    let addressArray = this.userContactForm.get('addresses') as FormArray
    addressArray?.removeAt(index)
  }

  public submitForm():void{
    let contactInfo = this.userContactForm.value.contactInfo[0]
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
    this.router.navigate(['/home']);
  }
  
  public checkEmailExist(email:string){
    console.log("in parent")
    let users: UserModel[] = this.userService.getUsers();

    users.map((user:UserModel)=>{
      if(user.email === email){
        return true
      }else return false
    })
  }

  
}
