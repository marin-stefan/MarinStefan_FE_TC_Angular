import { Injectable } from '@angular/core';
import { CardModel } from 'src/app/shared/card-template/model/cardModel';
import { UserModel } from './model/UserModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  dbUsers: UserModel[] = [
    {
      id: 1,
      firstName : 'John',
      lastName: 'Doe',
      age: "27",
      company: 'Microsoft',
      department: 'Front-End',
      gender : 'male',
      email : 'johndoe@gmail.com',
      activated : true
    },
    {
      id: 2,
      firstName: 'Michael',
      lastName: 'Jackson',
      age: "37",
      company: 'Universal',
      department: 'Back-End',
      gender : 'male',
      email: 'michaeljackson@gmail.com',
      activated : true
    },
    {
      id: 3,
      firstName: 'Phil',
      lastName: 'Buzz',
      age: "21",
      company: 'IsSoft',
      department: 'Front-End',
      gender : 'male',
      email: 'philbuzz@gmail.com',
      activated : true
    },
    {
      id: 4,
      firstName: 'Hanna',
      lastName: 'Montana',
      age : "33",
      company:'Pink-Software',
      department:'Back-End',
      gender : 'female',
      email: 'hannamontana@gmail.com',
      activated : false
    },
    {
      id: 5,
      firstName: 'Nobody',
      lastName: 'Particular',
      age: "25",
      company: '',
      department: '',
      gender : 'male',
      email: 'NobodyParticular@gmail.com',
      activated : false
    },
    // {
      //   id: 6,
      //   name: 'Mike Tyson',
      //   age : "60",
      //   gender : 'male',
      //   activated : true
      // },
      // {
      //   id: 7,
      //   name: 'Frank Williams',
      //   age : "52",
      //   gender : 'male',
      //   activated : true
      // },
      // {
      //   id: 8,
      //   name: 'Anna Harris',
      //   age : "24",
      //   gender : 'female',
      //   activated : true
      // },
  ]

  constructor() { }

  getUsers(): UserModel[]{
    return this.dbUsers
  }

  mapUsers():CardModel[]{
    let tempUsers = this.getUsers();
    let mappedUsers = tempUsers.map((user:UserModel) => {
      return {
        id : user.id,
        type:"user",
        displayName : "Name: " + user.firstName + " " + user.lastName ,
        age: "Age: " + user.age, 
        property: "Gender: " + user.gender,
        status: user.activated, 
        specificInfo: "Company: " + (user.company ? user.company : ""),
        specificInfo2: "Department: " + (user.department ? user.department : ""),
        specificInfo3: "Email: " + (user.email ? user.email: "")
      }
    })
    return mappedUsers
  }

  addNewUser(newUser:UserModel):void{
    newUser.id = (this.dbUsers.length) + 1; // adding id to the user ( for mock ...this should be handled by DB)
    this.dbUsers.push(newUser)
  }

}

