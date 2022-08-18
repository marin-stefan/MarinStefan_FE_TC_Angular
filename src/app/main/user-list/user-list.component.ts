import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/models/UserModel';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  
  

  baseUsers: UserModel[] = [
    {
      id: 1,
      name: 'John Doe',
      age : 27,
      gender : 'male',
      activated : true
    },
    {
      id: 2,
      name: 'Micheael Jackson',
      age : 37,
      gender : 'male',
      activated : true
    },
    {
      id: 3,
      name: 'Phil Buzz',
      age : 21,
      gender : 'male',
      activated : true
    },
    {
      id: 4,
      name: 'Hanna Montana',
      age : 33,
      gender : 'female',
      activated : false
    },
    {
      id: 5,
      name: 'Nobody Particular',
      age : 25,
      gender : 'male',
      activated : false
    },
    {
      id: 6,
      name: 'Mike Tyson',
      age : 60,
      gender : 'male',
      activated : true
    },
    {
      id: 7,
      name: 'Frank Williams',
      age : 52,
      gender : 'male',
      activated : true
    },
    {
      id: 8,
      name: 'Anna Harris',
      age : 24,
      gender : 'female',
      activated : true
    },
    {
      id: 9,
      name: 'Diana Miller',
      age : 29,
      gender : 'female',
      activated : true
    },
  ];

  users: UserModel[] = JSON.parse(JSON.stringify(this.baseUsers));
  status: boolean = true;
  

  constructor() { }

  ngOnInit(): void {
  }

  hideDisplayNonActive(){
    this.users = JSON.parse(JSON.stringify(this.baseUsers))

    this.users = this.status 
      ? this.users.filter((user: UserModel) => user.activated === false) 
      : this.users
    this.status = !this.status
  } 

  statusChange(eventData: {status: boolean, id: number, index: number}):void{
    this.baseUsers[eventData.index].activated = !this.baseUsers[eventData.index].activated
    this.users = JSON.parse(JSON.stringify(this.baseUsers))
  }

  genderSort(event:any):void{
    switch(event.value){
      case 'all':
        this.users = JSON.parse(JSON.stringify(this.baseUsers));
        break;
      case 'male':
        this.users = JSON.parse(JSON.stringify(this.baseUsers));
        this.users = this.users.filter((user:UserModel)=> user.gender === 'male');
        break;
      case 'female':
        this.users = JSON.parse(JSON.stringify(this.baseUsers));
        this.users = this.users.filter((user:UserModel)=> user.gender === 'female');
    }
  }

}
