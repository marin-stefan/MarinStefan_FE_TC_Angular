import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { CardTemplateComponent } from 'src/app/modules/shared/components/card-template/card-template.component';
import { CardModel } from 'src/app/modules/shared/interfaces/card-model';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { SortByFirstNamePipe } from 'src/app/pipes/sort-by-first-name.pipe';

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
  public pipedBaseCards: CardModel[];

  @ViewChildren(CardTemplateComponent) viewChildren: QueryList<CardTemplateComponent>

  constructor(
    private _userService: UserService,
    private router: Router,
    private _sortByFirstName : SortByFirstNamePipe
  ) { }

  ngOnInit(): void {
    this.baseCards = this._userService.mapUsers(); // main copy from bd ..we're altering this..not the db
    this.pipedBaseCards = this._sortByFirstName.transform(this.baseCards);
    this.cards = JSON.parse(JSON.stringify(this.pipedBaseCards));  //the copy of the bd to send to the html
  };

  // inverts the boolean value of the status and result for showHiddenCards method
  hideDisplayNonActive():void{
    this.showHiddenCards = !this.showHiddenCards;
    this.status = !this.status
  };

  // inverts the boolean value of that certain user object's status value
  statusChange(eventData: {status: boolean, id: number, index: number}):void{
    this.cards[eventData.index].status = !this.cards[eventData.index].status
  };

  // filters cards array which is displayed by the html
  genderSort(value:string):void{
    switch(value){
      case 'all':
        this.cards = JSON.parse(JSON.stringify(this.pipedBaseCards));
        break;
      case 'male':
        this.cards = JSON.parse(JSON.stringify(this.pipedBaseCards));
        this.cards = this.cards.filter((card:CardModel)=> card.property === 'Gender: male');
        break;
      case 'female':
        this.cards = JSON.parse(JSON.stringify(this.pipedBaseCards));
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


}









