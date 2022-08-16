import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  changeStatus(){
    this.activated = !this.activated
   }

}
