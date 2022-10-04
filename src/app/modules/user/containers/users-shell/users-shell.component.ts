import { Component, OnInit, QueryList, ViewChild, ViewChildren, ChangeDetectorRef } from '@angular/core';
import { CardTemplateComponent } from 'src/app/modules/shared/components/card-template/card-template.component';
import { CardModel } from 'src/app/modules/shared/interfaces/card-model';
import { UserService } from '../../services/user.service';
import { SortByFirstNamePipe } from 'src/app/pipes/sort-by-first-name.pipe';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
// import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { debounceTime, scan, startWith, withLatestFrom } from 'rxjs/operators';


@Component({
  selector: 'app-users-shell',
  templateUrl: './users-shell.component.html',
  styleUrls: ['./users-shell.component.css']
})
export class UsersShellComponent implements OnInit {
  
  
  public copyCards:CardModel[]; // a copy of the current page/index/size list of userd cards being displayed
  public pageNo : number = 1;
  public pageSize: number = 5;
  public loading : boolean = true; // boolean variable for the spinner
  public showHiddenCards = true; // variable for showing hidden cards
  public status: boolean = false; // status for each user
  public baseCards: CardModel[] =[]; // our mai user array as if in db
  public cards: CardModel[] =[] // our copy that we modify
  public pipedBaseCards: CardModel[];
  // public dataSource :MatTableDataSource<CardModel>
  // public obs$: Observable<any>;

  public curValue = '';
  public searchFieldFilter = new FormControl()
  public searchTarget$ : Observable<string[]>;

  @ViewChildren(CardTemplateComponent) viewChildren: QueryList<CardTemplateComponent>

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(
    private _userService: UserService,
    private _sortByFirstName : SortByFirstNamePipe,
    // private changeDetectorRef: ChangeDetectorRef
    ) { }
    
    ngOnInit(): void {
      this.loading = true;
      // getting ;list of users from API then populating the 3 variables i use 
      this._userService.getUsersFromApi('abc', '1', '5')
        
        .subscribe((users)=>{
        this.baseCards = this._userService.mapUsers(users)
        this.pipedBaseCards = this._sortByFirstName.transform(this.baseCards);
        this.cards = JSON.parse(JSON.stringify(this.pipedBaseCards));
        this.copyCards = JSON.parse(JSON.stringify(this.pipedBaseCards));
        this.loading = false;

        // this.dataSource = new MatTableDataSource<CardModel>(this.pipedBaseCards);
        // this.changeDetectorRef.detectChanges();
        // this.dataSource.paginator = this.paginator;
        // this.obs$ = this.dataSource.connect();


        this.searchTarget$ = this.searchFieldFilter.valueChanges.pipe(
          debounceTime(1000), // wait 1 sec until user stops
          startWith(this.curValue), // initial value
          // Accumlate input values; clear when input is empty
          scan((acc, t) => t ? acc.concat(t) : [], []),
          );


        this.searchTarget$
          .pipe(withLatestFrom(this.searchTarget$))
          .subscribe((stream) => {
            const target = (stream[0])[stream[0].length - 1]
            if(target){
              this.cards = this.cards.filter((card) => card.displayName.includes(target))
            }else{
              this.cards = JSON.parse(JSON.stringify(this.copyCards))
            }
        })
    })
  };

  // handle event from paginator
  pageEvent(event: { pageIndex: any; pageSize: any; }){
    this.loading = true;
    const pageNr = ((event.pageIndex)+1).toString();
    const itemsNr = (event.pageSize).toString();
    this.pageSize = event.pageSize;
    this.pageNo = event.pageIndex + 1;
    this._userService.getUsersFromApi('abc', pageNr, itemsNr)
    .subscribe((users)=>{
      this.baseCards = this._userService.mapUsers(users)
        this.pipedBaseCards = this._sortByFirstName.transform(this.baseCards);
        this.cards = JSON.parse(JSON.stringify(this.pipedBaseCards));
        this.copyCards = JSON.parse(JSON.stringify(this.pipedBaseCards));
        this.loading = false;
    })
  };

  // inverts the boolean value of the status and result for showHiddenCards method
  hideDisplayNonActive():void{
    this.showHiddenCards = !this.showHiddenCards;
    this.status = !this.status
  };

  // inverts the boolean value of that certain user object's status value
  statusChange(eventData: {status: boolean, id: number, index: number}):void{
    this.pipedBaseCards[eventData.index].status = !this.pipedBaseCards[eventData.index].status
  };

  // filters cards array which is displayed by the html
  genderSort(value:string):void{
    switch(value){
      case 'all':
        // this.genderSorting = 'all'
        // this.cards = JSON.parse(JSON.stringify(this.pipedBaseCards));
        // console.log(this.cards)
        break;
      case 'male':
        // this.genderSorting = 'male'
        // this.cards = JSON.parse(JSON.stringify(this.pipedBaseCards));
        // this.cards = this.cards.filter((card:CardModel)=> card.property === 'Gender: male');
        // console.log(this.cards)
        break;
      case 'female':
        // this.genderSorting = 'female'
        // this.cards = JSON.parse(JSON.stringify(this.pipedBaseCards));
        // this.cards = this.cards.filter((card:CardModel)=> card.property === 'Gender: female');
        // console.log(this.cards)
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

};









