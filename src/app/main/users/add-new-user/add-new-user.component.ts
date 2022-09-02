import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      age: new FormControl(''),
      company: new FormControl(''),
      department: new FormControl('frontEnd'),
      gender: new FormControl('male'),
      activated: new FormControl('true')
    });
  }
  
  saveUser():void{
    // this.router.navigate(['/home'])
    this.userService.addNewUser(this.reactiveForm.value)
  }


}
