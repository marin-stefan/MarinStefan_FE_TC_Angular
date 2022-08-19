import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListShellComponent } from './user-list-shell/user-list-shell.component';
import { UserCardComponent } from './user-card/user-card.component';
import { SortBarComponent } from './sort-bar/sort-bar.component';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { SharedModule } from '../shared/shared.module';
import { MyButtonComponent } from '../shared/my-button/my-button.component';


@NgModule({
  declarations: [
    UserListShellComponent,
    UserCardComponent,
    SortBarComponent
  ],
  imports: [
    CommonModule, 
    MatButtonModule,
    MatButtonToggleModule,
    SharedModule
  ],
  exports: [
    UserListShellComponent, UserCardComponent, SortBarComponent, MyButtonComponent
  ]
})
export class MainModule { }
