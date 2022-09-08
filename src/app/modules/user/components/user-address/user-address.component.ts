import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.css']
})
export class UserAddressComponent implements OnInit {

  @Input() public childAddressForm : FormGroup;

  @Input() public arrayIndex: number

  @Output() public delAddressItemEvent : EventEmitter<number> = new EventEmitter<number>();

  

  constructor() { }

  ngOnInit(): void {
  }

  static addAddressItem(): FormGroup {
    return new FormGroup ({
      street: new FormControl('', Validators.required),
      city: new FormControl(''),
      zip: new FormControl('')
    })
  }

  get userStreet() {return this.childAddressForm.get('street')};
  get userCity() {return this.childAddressForm.get('city')};
  get userZip() {return this.childAddressForm.get('zip')};


  public deleteAddress (index: number): void{
    this.delAddressItemEvent.next(index);
  }

  

}
