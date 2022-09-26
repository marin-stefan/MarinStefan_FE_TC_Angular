import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { UserModel } from '../../interfaces/user-model';
import { AddressModel } from '../../interfaces/address-model';


@Component({
  selector: 'app-add-user-shell',
  templateUrl: './add-user-shell.component.html',
  styleUrls: ['./add-user-shell.component.css']
})
export class AddUserShellComponent implements OnInit {

  // declaring our parent contact form and initialisation
  public parentUserContactForm = new FormGroup({});
  
  constructor(
    private router: Router, 
    private userService: UserService,
  ){ }
    
  ngOnInit(): void {
  };
    
  // on form submit we create our user object from the values of the form and call userservice method to save user
  public addUser():void{
    const form = this.parentUserContactForm.value
    let contactInfo = form['basicUserInfo']
    let contactAddressArray = form['addressUserInfo'].addresses
    let newUser:UserModel = {
      id: 99999 , // passing id just to match the UserModel ... User service adds it's own corect id to the Db users array
      firstName: contactInfo.firstName ,
      lastName: contactInfo.lastName ,
      age: contactInfo.age,
      company: contactInfo.company ,
      department: contactInfo.department,
      gender: contactInfo.gender,
      email: contactInfo.email,
      address1: this.buildAddressLine(contactAddressArray[0]),
      address2: this.buildAddressLine(contactAddressArray[1]),
      address3: this.buildAddressLine(contactAddressArray[2]),
      activated: contactInfo.activated 
    }
    this.userService.addNewUser(newUser);
    this.router.navigate(['users']); // after submit - redirect to users list page
  };
  
  public buildAddressLine(address:AddressModel):string{
    // builds a string with all the info if address is valid
    if(address){
      return address.street + (address.city? ", "+address.city: "") + (address.zip? ", "+address.zip: "")
    }else return null
  };

}
