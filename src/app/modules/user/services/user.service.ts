import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CardModel } from '../../shared/interfaces/card-model';
import { RandomApiResponse, RandomUserModel } from '../interfaces/random-user.model';
import { UserModel } from '../interfaces/user-model';
import { map, Observable, of, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public localCopyOfUsers:UserModel[]=[];

  constructor(private http: HttpClient) { }

  getUsersFromApi(seed:string, page:string, results:string):Observable<UserModel[]>{
    // return the user list from randomuser.me
    return this.http.get<RandomApiResponse>("https://randomuser.me/api/?page="+page+"&results="+results+"&seed="+seed)
    .pipe(switchMap(data => of(data)))
      .pipe(
        map(
          (res) => {
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
                    activated: true,
                    picture: (user.picture).large 
                }
                return filteredUser
              }
            )
          }
        ),tap((result) => {
          this.localCopyOfUsers = result
          console.log("loading results")
        })
    )
  };

  mapUsers(users:UserModel[]):CardModel[]{
    return users.map((user) => {
      return {
        id: user.id,
        type: 'user',
        displayName: 'Name: '+ user.firstName +" "+ user.lastName,
        age: "Age: " + user.age,
        property: "Gender: "+ user.gender, 
        status: user.activated,
        picture: user.picture,
        specificInfo: "Company: " + user.company,  
        specificInfo2: "Department: " + user.department,  
        specificInfo3: "Email: " + user.email,  
        specificInfo4: "Address: " + user.address1,  
        specificInfo5: user.address2,  
        specificInfo6: user.address3,
      }
    })
  };

  //returns the local copy of users ... for now for mock for some components like edit or add user since there is no actual 
  // server and database
  getUsers(): UserModel[]{
    return this.localCopyOfUsers
  };
  
  // should add user to DB but for now it just return user
  addNewUser(newUser:UserModel):Observable<UserModel>{
    newUser.id = (this.localCopyOfUsers.length) + 1; // adding id to the user ( for mock ...this should be handled by DB)
    this.localCopyOfUsers.push(newUser);
    return of(newUser);
  };

  // should edit and update user in DB but for now it just returns the edited user
  editUser(editedUser:UserModel):Observable<UserModel>{
    for (let i = 0; i<this.localCopyOfUsers.length; i++){
      if(editedUser.id === this.localCopyOfUsers[i].id){
        console.log('Add User was called in service and new user has been returned')
        this.localCopyOfUsers[i] = editedUser
      }
    }
    console.log('Edit User was called in service and edited user has been returned')
    return of(editedUser);
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
