import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() name:string ; 
  @Input() age:number ;
  @Input() gender:string;
  @Input() activated: boolean ;

  @Output() active = new EventEmitter<{status:boolean,name: string}>();
  userstatus : boolean
  constructor() { }

  ngOnInit(): void {
  }

  changeStatus(){
    this.activated = !this.activated
    this.userstatus = !this.userstatus
    this.active.emit({status : this.userstatus, name: this.name})
    
   }

}
