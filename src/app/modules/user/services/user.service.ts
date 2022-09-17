import { Injectable } from '@angular/core';
import { CardModel } from '../../shared/interfaces/card-model';
import { UserModel } from '../interfaces/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // our mock database with the array of user objects
  dbUsers: UserModel[] = [
    {
      id: 1,
      firstName : 'John',
      lastName: 'Doe',
      age: "27",
      company: 'Microsoft',
      department: 'frontEnd',
      gender : 'male',
      email : 'johndoe@gmail.com',
      address1 : '123 hill Road, Dallas, 65432',
      address2 : null,
      address3 : null,
      activated : true
    },
    {
      id: 2,
      firstName: 'Michael',
      lastName: 'Jackson',
      age: "37",
      company: 'Universal',
      department: 'backEnd',
      gender : 'male',
      email: 'michaeljackson@gmail.com',
      address1 : '123 hill Road, Dallas, 65432',
      address2 : null,
      address3 : null,
      activated : true
    },
    {
      id: 3,
      firstName: 'Phil',
      lastName: 'Buzz',
      age: "21",
      company: 'IsSoft',
      department: 'frontEnd',
      gender : 'male',
      email: 'philbuzz@gmail.com',
      address1 : '123 hill Road, Dallas, 65432',
      address2 : null,
      address3 : null,
      activated : true
    },
    {
      id: 4,
      firstName: 'Hanna',
      lastName: 'Montana',
      age : "33",
      company:'Pink-Software',
      department:'backEnd',
      gender : 'female',
      email: 'hannamontana@gmail.com',
      address1 : '123 hill Road, Dallas, 65432',
      address2 : null,
      address3 : null,
      activated : false
    },
    {
      id: 5,
      firstName: 'Nobody',
      lastName: 'Particular',
      age: "25",
      company: 'Red-Software',
      department: 'frontEnd',
      gender : 'male',
      email: 'nobodyparticular@gmail.com',
      address1 : '123 hill Road, Dallas, 65432',
      address2 : null,
      address3 : null,
      activated : false
    }
  ];

  constructor() { }

  // returns the array of users from DB
  getUsers(): UserModel[]{
    return this.dbUsers
  };

  // maps the array of user objects into a array of CardModel objects
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
        specificInfo3: "Email: " + (user.email ? user.email: ""),
        specificInfo4: user.address1? "Address: "+user.address1 : "",
        specificInfo5: user.address2? "Address: "+user.address2 : "",
        specificInfo6: user.address3? "Address: "+user.address3 : ""
      }
    })
    return mappedUsers;
  };

  // adds the new user object to the DB array of user objects
  addNewUser(newUser:UserModel):void{
    newUser.id = (this.dbUsers.length) + 1; // adding id to the user ( for mock ...this should be handled by DB)
    this.dbUsers.push(newUser)
  };

  editUser(user:UserModel):void{
    for (let i = 0; i<this.dbUsers.length; i++){
      if(user.id === this.dbUsers[i].id){
        this.dbUsers[i]=user
      }
    }
  };

  checkDuplicateEmail(email:string, id?:number):boolean{
    //checks if email is present 
    let users: UserModel[] = this.getUsers();
    let response = false;

    if(typeof id !== 'undefined'){ //if we have id present we discard the email of that id - for the edit-user
      const targetUser = (users.filter((user)=>user.id === id))[0]
      users.map((user:UserModel)=>{
        if((user.email === email) && (user.id !== targetUser.id)){
          response = true
        } 
      })
    }else { // we check all emails
      users.map((user:UserModel)=>{
        if(user.email === email){
          response = true
        } 
      })
    }
    return response;
  };

}
