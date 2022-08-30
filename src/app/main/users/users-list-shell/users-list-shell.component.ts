import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { UserService } from '../user.service';
import { CardModel } from 'src/app/shared/card-template/model/cardModel';
import { CardTemplateComponent } from 'src/app/shared/card-template/card-template.component';

@Component({
  selector: 'app-users-list-shell',
  templateUrl: './users-list-shell.component.html',
  styleUrls: ['./users-list-shell.component.css']
})
export class UsersListShellComponent implements OnInit {

  public showHiddenCards = true;
  public status: boolean = false;
  public baseCards: CardModel[];
  public cards: CardModel[];

  @ViewChildren(CardTemplateComponent) viewChildren: QueryList<CardTemplateComponent>;
  
  constructor(private _userService: UserService) { };

  ngOnInit(): void {
    this.baseCards = this._userService.mapUsers(); 
    this.cards = this._userService.mapUsers();  
  };

  hideDisplayNonActive(){
    this.showHiddenCards = !this.showHiddenCards;
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
        this.cards = this.cards.filter((card:CardModel)=> card.property === 'male');
        break;
      case 'female':
        this.cards = JSON.parse(JSON.stringify(this.baseCards));
        this.cards = this.cards.filter((card:CardModel)=> card.property === 'female');
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
