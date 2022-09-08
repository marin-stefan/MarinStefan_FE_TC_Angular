import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersShellComponent } from './containers/users-shell/users-shell.component';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SharedModule } from '../shared/shared.module';
import { AddUserShellComponent } from './containers/add-user-shell/add-user-shell.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserBasicComponent } from './components/user-basic/user-basic.component';
import { UserAddressComponent } from './components/user-address/user-address.component';



@NgModule({
  declarations: [
    UsersShellComponent,
    AddUserShellComponent,
    UserBasicComponent,
    UserAddressComponent,
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
    AddUserShellComponent
  ]
})
export class UserModule { }
