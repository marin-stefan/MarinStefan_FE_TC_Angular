import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../../interfaces/user-model';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-user-all-details-shell',
  templateUrl: './user-all-details-shell.component.html',
  styleUrls: ['./user-all-details-shell.component.css']
})
export class UserAllDetailsShellComponent implements OnInit {
  public baseUser : UserModel ; // our base refference of the user object that does'nt modify
  public completeUser: UserModel; // the copy we send to component
  public userId : number ; // id for user object

  constructor(
    private router : Router,
    private userService : UserService, 
  ) { }

  ngOnInit(): void {
    // we get the user id from url
    let url = (this.router.url).split('/');
    this.userId = parseInt(url[3]);
    this.populateUserVariable(this.userId); // we get our main baseUser refference 
  };

  //getting the user with the id and putting value inside baseUser and user variable
  public populateUserVariable(id:number):void{
    const users = this.userService.getUsers();
    this.baseUser = (users.filter((user)=> user.id === id))[0];
    this.completeUser = JSON.parse(JSON.stringify(this.baseUser));
  };

}
