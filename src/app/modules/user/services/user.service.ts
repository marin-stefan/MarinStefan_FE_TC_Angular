import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CardModel } from '../../shared/interfaces/card-model';
import { RandomApiResponse, RandomUserModel } from '../interfaces/random-user.model';
import { UserModel } from '../interfaces/user-model';
import { map, Observable } from 'rxjs';

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
  public dbUsers2:UserModel[]=[];

  constructor(private http: HttpClient) { }

  getUsersFromApi():Observable<UserModel[]>{
    // return the user list from randomuser.me
    return this.http.get<RandomApiResponse>("https://randomuser.me/api/?results=10").pipe(
      map(
        (res) => {
          console.log(res)
          return res.results.filter((user) => (user.id).value).map(
            (user) => {
              const filteredUser = {
                id: parseInt((user.id).value) ,
                  firstName: (user.name).first ,
                  lastName: (user.name).last ,
                  age: ((user.dob).age).toString() ,
                  company: "Bla BLa INC" ,
                  department: "frontEnd" ,
                  gender: user.gender ,
                  email: user.email ,
                  address1: ((user.location).street).name+" "+((user.location).street).number+" "+(user.location).city+" "+
                    (user.location).postcode+" "+(user.location).state+" "+(user.location).country ,
                  address2: "" ,
                  address3: "" ,
                  activated: true 
              }
              this.dbUsers2.push(filteredUser)
              return filteredUser
            }
          )
        }
      )
    ) 
  };

  //returns the array of users from DB
  getUsers(): UserModel[]{
    return this.dbUsers2
  };
  
  mapUsersFromApi():Observable<CardModel[]>{
    return this.getUsersFromApi().pipe(
      map(
        (res)=> {
          return res.map(
            (item) => {
              return {
                id: item.id,
                type: "user",
                displayName: "Name: "+ item.firstName +" "+ item.lastName,
                age: "Age: " + item.age,
                property: "Gender: "+ item.gender, 
                status: item.activated,
                specificInfo: "Company: " + item.company,  
                specificInfo2: "Department: " + item.department,  
                specificInfo3: "Email: " + item.email,  
                specificInfo4: "Address: " + item.address1,  
                specificInfo5: item.address2,  
                specificInfo6: item.address3,  
              }
            }
          )
        }
      )
    )
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
    // return false
  };

}
