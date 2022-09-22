import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { CardTemplateComponent } from 'src/app/modules/shared/components/card-template/card-template.component';
import { CardModel } from 'src/app/modules/shared/interfaces/card-model';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-shell',
  templateUrl: './users-shell.component.html',
  styleUrls: ['./users-shell.component.css']
})
export class UsersShellComponent implements OnInit {

  public showHiddenCards = true; // variable for showing hidden cards
  public status: boolean = false; // status for each user
  public baseCards: CardModel[]; // our mai user array as if in db
  public cards: CardModel[]; // our copy that we modify

  @ViewChildren(CardTemplateComponent) viewChildren: QueryList<CardTemplateComponent>

  constructor(
    private _userService: UserService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.baseCards = this._userService.mapUsers(); // main copy from bd ..we're altering this..not the db
    this.cards = JSON.parse(JSON.stringify(this.baseCards));  //the copy of the bd to send to the html
  };

  // inverts the boolean value of the status and result for showHiddenCards method
  hideDisplayNonActive():void{
    console.log("intousersshell hidedisplay")
    this.showHiddenCards = !this.showHiddenCards;
    this.status = !this.status
  };

  // inverts the boolean value of that certain user object's status value
  statusChange(eventData: {status: boolean, id: number, index: number}):void{
    this.cards[eventData.index].status = !this.cards[eventData.index].status
  };

  // filters cards array which is displayed by the html
  genderSort(value:string):void{
    console.log(value)
    switch(value){
      case 'all':
        this.cards = JSON.parse(JSON.stringify(this.baseCards));
        break;
      case 'male':
        this.cards = JSON.parse(JSON.stringify(this.baseCards));
        this.cards = this.cards.filter((card:CardModel)=> card.property === 'Gender: male');
        break;
      case 'female':
        this.cards = JSON.parse(JSON.stringify(this.baseCards));
        this.cards = this.cards.filter((card:CardModel)=> card.property === 'Gender: female');
        break;
    }
  };

  // method to return if all cards are active or at least one of them isn't
  areAllUsersActive():boolean{
    return this.cards.every(card => card.status)
  };

  // method to modify each card's status to true 
  activateCards():void{
    this.areAllUsersActive()
      ? this.viewChildren.toArray().forEach(userCard => userCard.info.status = !userCard.info.status)
      : this.viewChildren.toArray().forEach(userCard => userCard.info.status = true)
  };

  // at pencil icon click we redirect to the edit-user page of the user with id userId
  public goToEditPage(userId:number){
    this._router.navigateByUrl('/edit-user/'+ userId)
    // this._router.navigate[('/edit-user/' + userId)]
  };

  // at user icon click we redirect to the user-details page of the user with id userId
  public goToDetailsPage(userId:number){
    this._router.navigateByUrl('/users/'+ userId + '/all')
    // this._router.navigate[('/edit-user/' + userId)]
  };

}









