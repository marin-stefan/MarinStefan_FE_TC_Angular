import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { SortBarComponent } from './sort-bar/sort-bar.component';



@NgModule({
  declarations: [
    UserListComponent,
    UserCardComponent,
    SortBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserListComponent, UserCardComponent, SortBarComponent
  ]
})
export class MainModule { }
