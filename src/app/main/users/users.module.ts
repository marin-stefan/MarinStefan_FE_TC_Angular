import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle'; 
import { MatIconModule } from '@angular/material/icon';
import { UsersListShellComponent } from './users-list-shell/users-list-shell.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    UsersListShellComponent
  ],
  imports: [
    CommonModule, MatButtonModule, MatButtonToggleModule, MatIconModule, SharedModule
  ],
  exports: [
    UsersListShellComponent,
  ]
})
export class UsersModule { }
