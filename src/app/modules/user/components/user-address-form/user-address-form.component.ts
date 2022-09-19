import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { UserModel } from '../../interfaces/user-model';

@Component({
  selector: 'app-user-address-form',
  templateUrl: './user-address-form.component.html',
  styleUrls: ['./user-address-form.component.css']
})
export class UserAddressFormComponent implements OnInit {

  // declaring adress form
  public addressInfoForm: FormGroup ;

  @Input() parentForm : FormGroup ; // parent form 
  @Input() user : UserModel; // user object when used in edit-form to prefill inputs

  constructor() { }

  ngOnInit(): void {
    // creating the form,binding it and adding 1 set of address controls
    this.buildAddressInfoForm();
    this.parentForm.addControl('addressUserInfo', this.addressInfoForm);
    this.addAddressItem();
    this.user? this.patchForm(this.user) : null // if user input is present we prefill inputs
  };

  // builds the address form
  public buildAddressInfoForm():void{
    this.addressInfoForm = new FormGroup({
      addresses: new FormArray([])
    })
  };

  //adds a address item to the addresses array nested in the main addresses form
  addAddressItem(){
    const addressItem = new FormGroup({
      street : new FormControl ('', Validators.required),
      city : new FormControl ('', ),
      zip : new FormControl ('', )
    });
    (this.addressInfoForm.get('addresses') as FormArray).push(addressItem)
  };

  // delete the address item from the addresses array
  public delAddressItem(index: number):void{
    let addressArray = this.addressInfoForm?.get('addresses') as FormArray
    addressArray?.removeAt(index)
  };

  // populates the form with data from the user with that certain id
  public patchForm(targetUser:UserModel):void{
    // replacing addresses formArray
    this.addressInfoForm.setControl('addresses', this.setExistingAddreses(this.user))
  };

  public setExistingAddreses(user:UserModel):FormArray{
    // getting array of addreses from input UserModel Object
    const newAddresses = []
    for(const key in user){
      if( ["address1","address2","address3"].includes(key)){
        const address = user[key]
        if(address){
          const splitAddress = address.split(',')
          newAddresses.push({
            street: splitAddress[0],
            city: splitAddress[1],
            zip: splitAddress[2]
          })
        };
      };
    };

    // creating new form array for addreses
    const formArray = new FormArray([]);
    newAddresses.map((item)=>{
      formArray.push(
        new FormGroup({
          street: new FormControl(item.street, Validators.required ),
          city: new FormControl (item.city, ),
          zip: new FormControl (item.zip, )
        })
      );
    });
    return formArray;
  };

}
