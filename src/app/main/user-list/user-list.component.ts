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
      name: 'John Doe',
      age : 27,
      gender : 'male',
      activated : true
    },
    {
      name: 'Micheael Jackson',
      age : 37,
      gender : 'male',
      activated : true
    },
    {
      name: 'Phil Buzz',
      age : 21,
      gender : 'male',
      activated : true
    },
    {
      name: 'Hanna Montana',
      age : 33,
      gender : 'female',
      activated : false
    },
    {
      name: 'Nobody Particular',
      age : 25,
      gender : 'male',
      activated : false
    },
    {
      name: 'Mike Tyson',
      age : 60,
      gender : 'male',
      activated : true
    },
    {
      name: 'Frank Williams',
      age : 52,
      gender : 'male',
      activated : true
    },
    {
      name: 'Anna Harris',
      age : 24,
      gender : 'female',
      activated : true
    },
    {
      name: 'Diana Miller',
      age : 29,
      gender : 'female',
      activated : true
    },
  ]

  users = JSON.parse(JSON.stringify(this.baseUsers))
  gender = 'all'
  status = 'active'
  

  constructor() { }

  ngOnInit(): void {
  }

  genderSort(){ 
    if (this.gender === 'all'){
      this.users = JSON.parse(JSON.stringify(this.baseUsers))
      this.gender = 'male'
    } else if (this.gender === 'male'){
      this.users = JSON.parse(JSON.stringify(this.baseUsers))
      this.users = this.users.filter((user:UserModel)=> user.gender === 'male')
      this.gender = 'female'
    } else if (this.gender === 'female'){
      this.users = JSON.parse(JSON.stringify(this.baseUsers))
      this.users = this.users.filter((user:UserModel)=> user.gender === 'female')
      this.gender = 'all'
    }
    
  }

  hideDisplayNonActive(){
    if(this.status === 'active'){
      this.users = JSON.parse(JSON.stringify(this.baseUsers))
      this.status = 'nonactive'
    } else if(this.status === 'nonactive'){
      this.users = JSON.parse(JSON.stringify(this.baseUsers))
      this.users = this.users.filter((user:UserModel) => user.activated === true)
      this.status = 'active'
    }
  } 


  statusChange(eventData: {status: boolean, name: string}){
    console.log(eventData)
  }

}
