import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/users.service';
import { UserModel } from 'src/models/UserModel';

@Component({
  selector: 'app-user-list-shell',
  templateUrl: './user-list-shell.component.html',
  styleUrls: ['./user-list-shell.component.css']
})
export class UserListShellComponent implements OnInit {
  
  public baseUsers: UserModel[];
  public status: boolean = false;
  public users: UserModel[]
  
  constructor(private _usersService: UsersService) { }
  
  ngOnInit(): void {
    this.baseUsers = this._usersService.getUsers();
    this.users = this._usersService.getUsers();
  }
  

  hideDisplayNonActive(){
    let copy = JSON.parse(JSON.stringify(this.baseUsers))
    this.users = this.status 
      ? copy
      : this.users.filter((user: UserModel) => user.activated === true)
    this.status = !this.status
  } 

  statusChange(eventData: {status: boolean, id: number, index: number}):void{
    this.users[eventData.index].activated = !this.users[eventData.index].activated
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
        break;
    }
  }

}
