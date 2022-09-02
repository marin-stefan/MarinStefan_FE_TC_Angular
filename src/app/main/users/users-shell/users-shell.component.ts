import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { UserService } from '../user.service';
import { CardModel } from 'src/app/shared/card-template/model/cardModel';
import { CardTemplateComponent } from 'src/app/shared/card-template/card-template.component';

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

  @ViewChildren(CardTemplateComponent) viewChildren: QueryList<CardTemplateComponent>;
  
  constructor(private _userService: UserService) { };

  ngOnInit():void {
    this.baseCards = this._userService.mapUsers(); // main copy from bd ..we're altering this..not the db
    this.cards = JSON.parse(JSON.stringify(this.baseCards));  //the copy of the bd to send to the html
  };

  hideDisplayNonActive():void{
    this.showHiddenCards = !this.showHiddenCards;
    this.status = !this.status
  };

  statusChange(eventData: {status: boolean, id: number, index: number}):void{
    this.cards[eventData.index].status = !this.cards[eventData.index].status
  };

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

  areAllUsersActive():boolean{
    return this.cards.every(card => card.status)
  };

  activateCards():void{
    this.areAllUsersActive()
      ? this.viewChildren.toArray().forEach(userCard => userCard.info.status = !userCard.info.status)
      : this.viewChildren.toArray().forEach(userCard => userCard.info.status = true)
  };

}
