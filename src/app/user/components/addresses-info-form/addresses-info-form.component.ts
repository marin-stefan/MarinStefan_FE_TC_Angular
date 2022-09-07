import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addresses-info-form',
  templateUrl: './addresses-info-form.component.html',
  styleUrls: ['./addresses-info-form.component.css']
})
export class AddressesInfoFormComponent implements OnInit {

  @Input() addressForm: FormGroup

  constructor() { }

  ngOnInit(): void {
  }

}
