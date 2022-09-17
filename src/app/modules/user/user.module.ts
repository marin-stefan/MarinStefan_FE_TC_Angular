import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditUserShellComponent } from './containers/edit-user-shell/edit-user-shell.component';
import { AddUserShellComponent } from './containers/add-user-shell/add-user-shell.component';
import { UsersShellComponent } from './containers/users-shell/users-shell.component';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { UserBasicComponent } from './components/user-basic/user-basic.component';
import { UserAddressComponent } from './components/user-address/user-address.component';
import { SharedModule } from '../shared/shared.module';
import { UsersPageComponent } from './containers/users-shell/users-page/users-page.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { AddUserPageComponent } from './containers/add-user-shell/add-user-page/add-user-page.component';
import { EditUserPageComponent } from './containers/edit-user-shell/edit-user-page/edit-user-page.component';



@NgModule({
  declarations: [
    UsersShellComponent,
    AddUserShellComponent,
    UserBasicComponent,
    UserAddressComponent,
    EditUserShellComponent,
    UsersPageComponent,
    AddUserPageComponent,
    EditUserPageComponent,
  ],
  imports: [
    CommonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    SharedModule,
    HeaderModule,
    FooterModule
  ],
  exports: [
    AddUserShellComponent,
    EditUserShellComponent,
    UsersShellComponent,
    UsersPageComponent,
    AddUserPageComponent,
    EditUserPageComponent
  ]
})
export class UserModule { }
