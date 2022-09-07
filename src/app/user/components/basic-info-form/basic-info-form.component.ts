import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-basic-info-form',
  templateUrl: './basic-info-form.component.html',
  styleUrls: ['./basic-info-form.component.css']
})
export class BasicInfoFormComponent implements OnInit {

  @Input() basicInfoForm: FormGroup


  constructor() { }

  ngOnInit(): void {
    console.log(this.basicInfoForm)
    this.basicInfoForm.valueChanges.subscribe(x=>{console.log(x)})
  }


}
