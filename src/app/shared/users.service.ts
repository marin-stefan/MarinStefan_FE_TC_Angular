import { Injectable } from '@angular/core';
import { UserModel } from 'src/models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getUsers(): UserModel[]{
    return [
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
    ]
  }

}
