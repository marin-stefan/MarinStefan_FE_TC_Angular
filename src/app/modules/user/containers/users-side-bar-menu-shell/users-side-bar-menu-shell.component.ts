import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users-side-bar-menu-shell',
  templateUrl: './users-side-bar-menu-shell.component.html',
  styleUrls: ['./users-side-bar-menu-shell.component.css']
})
export class UsersSideBarMenuShellComponent implements OnInit {

  @Input() status: boolean ;
  @Input() usersStatus: boolean ;

  @Output() newGenderEvent = new EventEmitter<string>();
  @Output() newHideDisplayNonActiveEvent = new EventEmitter<any>();
  @Output() newActivateCardsEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  public emitGender(event:any):void{
    	// just tells the parent to call it's sortgender method with the event.value string param
      this.newGenderEvent.emit(event.value)
  }

  public emitHideDisplayNonActive():void{
    // just tells the parent to call it's hideDisplayNonActive method
    this.newHideDisplayNonActiveEvent.emit()
  }

  public emitActivateCards():void{
    //just tells the parent to call it's activateCards methos
    this.newActivateCardsEvent.emit();
  }
 
  public allUsersActive():Boolean{
    // returns the value of the input variable sent by parent
    return this.usersStatus;
  }
}
