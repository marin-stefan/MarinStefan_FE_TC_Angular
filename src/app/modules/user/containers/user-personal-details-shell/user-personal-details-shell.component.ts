import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../../interfaces/user-model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-personal-details-shell',
  templateUrl: './user-personal-details-shell.component.html',
  styleUrls: ['./user-personal-details-shell.component.css']
})
export class UserPersonalDetailsShellComponent implements OnInit {

  public baseUser : UserModel; // our main complete user obj ref that does not modify
  public personalUser: UserModel; // the copy we send to component
  public userId : number ; // id for user object

  constructor(
    private userService : UserService,
    private router : Router
  ) { }

  ngOnInit(): void {
    // we get the user id from url
    let url = (this.router.url).split('/')
    this.userId = parseInt(url[1])
    this.populateUserVariable(this.userId); // we get our main baseUser refference 
  };

  //getting the user with the id and putting filtered value inside user and user variable
  public populateUserVariable(id:number):void{
    const users = this.userService.getUsers();
    this.baseUser = (users.filter((user)=> user.id === id))[0];
    this.personalUser = JSON.parse(JSON.stringify(this.baseUser));
    ['company','department'].forEach(el => delete this.personalUser[el]);
  };

}
