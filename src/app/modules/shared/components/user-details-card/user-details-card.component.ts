import { Component, Input, OnInit } from '@angular/core';
import { UserModel } from 'src/app/modules/user/interfaces/user-model';

@Component({
  selector: 'app-user-details-card',
  templateUrl: './user-details-card.component.html',
  styleUrls: ['./user-details-card.component.css']
})
export class UserDetailsCardComponent implements OnInit {

  @Input() user: UserModel;

  constructor() { }

  ngOnInit(): void {
  }

}
