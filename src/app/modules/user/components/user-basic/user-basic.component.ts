import { Component, OnInit, Input } from '@angular/core';
import {  FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-user-basic',
  templateUrl: './user-basic.component.html',
  styleUrls: ['./user-basic.component.css']
})

export class UserBasicComponent implements OnInit {


  public basicForm: FormGroup
  
  @Input() formGroupName : string
  
  constructor(private parentFormGroup: FormGroupDirective) { }


  ngOnInit(): void {
    this.basicForm = this.parentFormGroup.control.get(this.formGroupName) as FormGroup
  }

  get userFirstName() {return this.basicForm.get('firstName')};
  get userLastName() {return this.basicForm.get('lastName')};
  get userAge() {return this.basicForm.get('age')};
  get userCompany() {return this.basicForm.get('company')};
  get userEmail() {return this.basicForm.get('email')};
  get userDepartment() {return this.basicForm.get('department')};
  get userGender() {return this.basicForm.get('gender')};

}
