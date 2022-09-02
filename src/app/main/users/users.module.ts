import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle'; 
import { MatIconModule } from '@angular/material/icon';
import { UsersShellComponent } from './users-shell/users-shell.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    UsersShellComponent,
    AddNewUserComponent
  ],
  imports: [
    CommonModule, MatButtonModule, MatButtonToggleModule, MatIconModule, SharedModule, FormsModule, ReactiveFormsModule , RouterModule
  ],
  exports: [
    UsersShellComponent, AddNewUserComponent
  ]
})
export class UsersModule { }
