import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { CardTemplateComponent } from 'src/app/modules/shared/components/card-template/card-template.component';
import { CardModel } from 'src/app/modules/shared/interfaces/card-model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users-shell',
  templateUrl: './users-shell.component.html',
  styleUrls: ['./users-shell.component.css']
})
export class UsersShellComponent implements OnInit {

  public showHiddenCards = true;
  public status: boolean = false;
  public baseCards: CardModel[];
  public cards: CardModel[];

  @ViewChildren(CardTemplateComponent) viewChildren: QueryList<CardTemplateComponent>

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.baseCards = this._userService.mapUsers(); // main copy from bd ..we're altering this..not the db
    this.cards = JSON.parse(JSON.stringify(this.baseCards));  //the copy of the bd to send to the html
  }

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
  genderSort(event:any):void{
    switch(event.value){
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

}
