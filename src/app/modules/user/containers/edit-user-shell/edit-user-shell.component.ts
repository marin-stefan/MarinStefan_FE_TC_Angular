import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { UserModel } from '../../interfaces/user-model';
import { AddressModel } from '../../interfaces/address-model';

@Component({
  selector: 'app-edit-user-shell',
  templateUrl: './edit-user-shell.component.html',
  styleUrls: ['./edit-user-shell.component.css']
})
export class EditUserShellComponent implements OnInit {
  
 
  public parentUserEditForm = new FormGroup({}); // parent form
  public userId : number ; // id for user object
  public userToEdit : UserModel ; //user object to edit
  
  constructor(
    private router: Router, 
    private userService: UserService,
    private activatedRoute : ActivatedRoute
  ) { }
    
  ngOnInit(): void {
    // we get the user id from url
    this.userId = parseInt( this.activatedRoute.snapshot.paramMap.get('id'))
    // we assign data to the variable we send to child with the user details
    this.populateUserToEdit(this.userId)
  };
    
  // populating userToEdit variable with the correspondent user obj to the user id in the url param
  public populateUserToEdit(id:number):void{
    const users = this.userService.getUsers();
    this.userToEdit = (users.filter((user)=> user.id === id))[0]
  };


  // build the edited user obj based on the UserModel and calls userservice method to update in main db users array
  public submitChanges():void{
    let contactInfo = this.parentUserEditForm.controls['basicUserInfo'].value
    let addressInfo = this.parentUserEditForm.controls['addressUserInfo'].value
    console.log(addressInfo.addresses)

    let newUser:UserModel = {
      id: this.userId,
      firstName: contactInfo.firstName ,
      lastName: contactInfo.lastName ,
      age: contactInfo.age ,
      company: contactInfo.company ,
      department: contactInfo.department,
      gender: contactInfo.gender,
      email: contactInfo.email,
      address1: this.buildAddressLine(addressInfo.addresses[0]),
      address2: this.buildAddressLine(addressInfo.addresses[1]),
      address3: this.buildAddressLine(addressInfo.addresses[2]),
      activated: contactInfo.activated 
    }
    this.userService.editUser(newUser);
    this.router.navigate(['/users']); // after submit - redirect to users list page
  }

  public buildAddressLine(address:AddressModel):string{
    //builds string from address info if valid
    if(address){
      return address.street + (address.city? ", "+address.city: "") + (address.zip? ", "+address.zip: "")
    }else return null
  };

}
