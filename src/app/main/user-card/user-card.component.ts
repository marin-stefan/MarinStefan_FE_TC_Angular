import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserModel } from 'src/models/UserModel';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user: UserModel;
  @Input() index: number;

  @Output() activeStatus = new EventEmitter<{status: boolean, id: number, index: number}>();
  constructor() { }

  ngOnInit(): void {
  }

  changeStatus():void{
    this.activeStatus.emit({status : this.user.activated, id: this.user.id, index: this.index})
   }

}
