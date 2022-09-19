import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from '../../interfaces/user-model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-details-shell',
  templateUrl: './user-details-shell.component.html',
  styleUrls: ['./user-details-shell.component.css']
})
export class UserDetailsShellComponent implements OnInit {

  public baseUser: UserModel; // for the main copy of the user info
  public user: UserModel; // the copy we send to component
  public userId : number ; // id for user object

  constructor(
    private userService : UserService, 
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    // we get the user id from url
    this.userId = parseInt( this.activatedRoute.snapshot.paramMap.get('id'))
    this.populateBaseUser(this.userId); // we get our main baseUser refference 
  };

  // getting the user with the id and putting value inside baseUser and user variable
  public populateBaseUser(id:number):void{
    const users = this.userService.getUsers();
    this.baseUser = (users.filter((user)=> user.id === id))[0];
    this.user = JSON.parse(JSON.stringify(this.baseUser));
  };

  InfoOptionChange(event:any):void{
    switch(event.value){
      case 'complete':
        this.user = JSON.parse(JSON.stringify(this.baseUser));
        break;
      case 'personal':
        this.user = JSON.parse(JSON.stringify(this.baseUser));
        for (const property in this.user) {
          if((property === 'company') || (property === 'department')){
            this.user[property] = null
          };
        }
        break;
      case 'company':
        this.user = JSON.parse(JSON.stringify(this.baseUser));
        for (const property in this.user) {
          if(['firstName', 'lastName', 'age', 'gender', 'email', 'address1'].includes(property)){
            this.user[property] = null
          };
        }
        // this.cards = this.cards.filter((card:CardModel)=> card.property === 'Gender: female');
        break;
    }
  };
  
}
