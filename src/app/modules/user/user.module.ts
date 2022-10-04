import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table'

import { SharedModule } from '../shared/shared.module';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';

import { EditUserShellComponent } from './containers/edit-user-shell/edit-user-shell.component';
import { AddUserShellComponent } from './containers/add-user-shell/add-user-shell.component';
import { UsersShellComponent } from './containers/users-shell/users-shell.component';
import { UserBasicFormComponent } from './components/user-basic-form/user-basic-form.component';
import { UserAddressFormComponent } from './components/user-address-form/user-address-form.component';
import { UserAllDetailsShellComponent } from './containers/user-all-details-shell/user-all-details-shell.component';
import { UserDetailsCardComponent } from './components/user-details-card/user-details-card.component';
import { UserPersonalDetailsShellComponent } from './containers/user-personal-details-shell/user-personal-details-shell.component';
import { UserCompanyDetailsShellComponent } from './containers/user-company-details-shell/user-company-details-shell.component';
import { UserDetailsLayoutComponent } from './components/user-details-layout/user-details-layout.component';
import { UsersSideBarMenuShellComponent } from './containers/users-side-bar-menu-shell/users-side-bar-menu-shell.component';

// alert("user module");



@NgModule({
  declarations: [
    UsersShellComponent,
    AddUserShellComponent,
    UserBasicFormComponent,
    UserAddressFormComponent,
    EditUserShellComponent,
    UserAllDetailsShellComponent,
    UserDetailsCardComponent,
    UserPersonalDetailsShellComponent,
    UserCompanyDetailsShellComponent,
    UserDetailsLayoutComponent,
    UsersSideBarMenuShellComponent,
  ],
  imports: [
    CommonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatTabsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    SharedModule,
    HeaderModule,
    FooterModule,
    RouterModule,
    MatCardModule,
    UserRoutingModule,
    MatPaginatorModule,
    MatTableModule
  ],
  exports: [
    AddUserShellComponent,
    EditUserShellComponent,
    UsersShellComponent,
    UserDetailsCardComponent,
    UserPersonalDetailsShellComponent,
    UserCompanyDetailsShellComponent,
    UserDetailsLayoutComponent,
    UsersSideBarMenuShellComponent,
    MatPaginatorModule
  ]
})
export class UserModule { }
