import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CardTemplateComponent } from 'src/app/modules/shared/components/card-template/card-template.component';
import { UserService } from '../../services/user.service';
import { SortByFirstNamePipe } from 'src/app/pipes/sort-by-first-name.pipe';
import { MatPaginator } from '@angular/material/paginator';
import { BehaviorSubject, Observable, tap, map, combineLatest } from 'rxjs';
import { FormControl } from '@angular/forms';
import { debounceTime, scan, startWith, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-users-shell',
  templateUrl: './users-shell.component.html',
  styleUrls: ['./users-shell.component.css']
})
export class UsersShellComponent implements OnInit {
  
  // public pageNo : number = 1; 
  public pageSize: number = 5;
  public loading : boolean = true; // boolean variable for the spinner 
  public searchCurrentValue : string = ''; // starter value and reset field refference .

  public searchFieldFilter = new FormControl()
  public searchTarget$ : Observable<string[]>;
  public sortCase : BehaviorSubject<string> = new BehaviorSubject<string>('all')
  public pageNumber: BehaviorSubject<string> = new BehaviorSubject<string>('1');
  public cards$ : Observable<any>


  public status: boolean = true; // status for each user
  public showHiddenCards = true; // variable for showing hidden cards
  


  @ViewChildren(CardTemplateComponent) viewChildren: QueryList<CardTemplateComponent>
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(
    private _userService: UserService,
    private _sortByFirstName : SortByFirstNamePipe,
    ) { }
    
    ngOnInit(): void {

      this.searchTarget$ = this.searchFieldFilter.valueChanges.pipe(
        debounceTime(1000), // wait 1 sec until user stops
        startWith(this.searchCurrentValue), // initial value
        // Accumlate input values; clear when input is empty
        scan((acc, t) => t ? t : null, null)
      );

      this.cards$ = combineLatest(this.pageNumber, this.searchTarget$, this.sortCase).pipe(
          switchMap((data) => {
            let currentPageNumber = data[0]; // refference for 1st obs value
            let searchTarget = data[1]; // refference for 2nd obs value
            let genderOption = data[2]; // refference for 3rd obs value
            if (!searchTarget) {
              this.loading = true // mat-spinner variable

              // if search is blank or cleared we display the whole list of users(size depending on paginator selection)
              return this._userService.getUsersFromApi('abc', currentPageNumber, this.pageSize.toString()).pipe(
                map((res) => {
                  return res.filter((user) => {
                    return  ((user.property.split(' '))[1] === genderOption || genderOption === 'all') 
                  })
                })
              ) 
            } else {
              return this._userService.getUsersFromApi('abc', currentPageNumber, this.pageSize.toString()).pipe(
                map((res) => {
                    return res.filter((user) => { 
                      // save in some variables for others to understand
                      const nameOfUser = user.displayName.split(" ")[1];
                      const searchCombination = (searchTarget.toString());
                      const userGender = (user.property.split(' '))[1];
                      return nameOfUser === searchCombination && (genderOption === userGender || genderOption ===  'all')
                    })
                  }
                )
              )
            }
          }),tap(() => this.loading = false) // changing the mat-spinner variable to hide it.
      );

  };

  // handle event from paginator
  pageEvent(event: { pageIndex: any; pageSize: any; }){
    this.pageSize = event.pageSize;
    this.pageNumber.next((event.pageIndex+1).toString())
  };

  genderSelect(event){
    this.sortCase.next(event) // emits the value of the selected option
  }

  clearSearchField(){
    this.searchCurrentValue = ''; //clear the search field
  }



  
  

  // inverts the boolean value of the status and result for showHiddenCards method
  hideDisplayNonActive():void{
    // this.showHiddenCards = !this.showHiddenCards;
    // this.status = !this.status
  };

  // inverts the boolean value of that certain user object's status value
  statusChange(eventData: {status: boolean, id: number, index: number}):void{
    // this.pipedBaseCards[eventData.index].status = !this.pipedBaseCards[eventData.index].status
  };


  // method to return if all cards are active or at least one of them isn't
  areAllUsersActive():boolean{
    // return this.cards.every(card => card.status)
    return true
  };


  // method to modify each card's status to true 
  activateCards():void{
    this.areAllUsersActive()
      ? this.viewChildren.toArray().forEach(userCard => userCard.info.status = !userCard.info.status)
      : this.viewChildren.toArray().forEach(userCard => userCard.info.status = true)
  };

};









