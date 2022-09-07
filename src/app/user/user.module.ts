import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersShellComponent } from './containers/users-shell/users-shell.component';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SharedModule } from '../shared/shared.module';
import { SortBarComponent } from './components/sort-bar/sort-bar.component';
import { AddUserShellComponent } from './containers/add-user-shell/add-user-shell.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BasicInfoFormComponent } from './components/basic-info-form/basic-info-form.component';
import { AddressesInfoFormComponent } from './components/addresses-info-form/addresses-info-form.component';



@NgModule({
  declarations: [
    UsersShellComponent,
    SortBarComponent,
    AddUserShellComponent,
    BasicInfoFormComponent,
    AddressesInfoFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatButtonToggleModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule
  ],
  exports: [
    UsersShellComponent,
    SortBarComponent,
    AddUserShellComponent
  ]
})
export class UserModule { }
