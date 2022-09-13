import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.css']
})
export class UserAddressComponent implements OnInit {

  // declaring the child ddress form variable of type FormGroup that we get from the parent
  @Input() public childAddressForm : FormGroup;

  //index we get from parent ,used for multiple address formgroups
  @Input() public arrayIndex: number

  //number of addresses as we get from parent to help display/hide del button on each address group
  @Input() public noOfAddresses: number;

  // calling the delAddress method in the parent
  @Output() public delAddressItemEvent : EventEmitter<number> = new EventEmitter<number>();

  // @Input() formGroupName : string
  // public addressForm : FormGroup

  constructor(private parentFormGroup: FormGroupDirective) { }

  ngOnInit(): void {
    // this.addressForm = this.parentFormGroup.control.get(this.formGroupName) as FormGroup
  }

  //build and returns a address form group with 3 form controls
  static buildAddressItem(): FormGroup {
    return new FormGroup ({
      street: new FormControl('', Validators.required),
      city: new FormControl(''),
      zip: new FormControl('')
    })
  }

  // getters for the street, zip and city controls 
  get userStreet() {return this.childAddressForm.get('street')};
  get userCity() {return this.childAddressForm.get('city')};
  get userZip() {return this.childAddressForm.get('zip')};


  //deletes address - calls the parent's delAddress method
  public deleteAddress (index: number): void{
    this.delAddressItemEvent.next(index);
  }

 

  

}
