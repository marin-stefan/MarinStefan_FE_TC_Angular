import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditUserShellComponent } from './containers/edit-user-shell/edit-user-shell.component';
import { AddUserShellComponent } from './containers/add-user-shell/add-user-shell.component';
import { UsersShellComponent } from './containers/users-shell/users-shell.component';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { UserBasicFormComponent } from './components/user-basic-form/user-basic-form.component';
import { UserAddressFormComponent } from './components/user-address-form/user-address-form.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { UserAllDetailsShellComponent } from './containers/user-all-details-shell/user-all-details-shell.component';
import { UserDetailsCardComponent } from './components/user-details-card/user-details-card.component';
import { UserPersonalDetailsShellComponent } from './containers/user-personal-details-shell/user-personal-details-shell.component';
import { UserCompanyDetailsShellComponent } from './containers/user-company-details-shell/user-company-details-shell.component';
import { RouterModule } from '@angular/router';
import { UserDetailsLayoutComponent } from './components/user-details-layout/user-details-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



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
    UserDetailsLayoutComponent
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
    BrowserAnimationsModule,
    MatCardModule
  ],
  exports: [
    AddUserShellComponent,
    EditUserShellComponent,
    UsersShellComponent,
    UserDetailsCardComponent,
    UserPersonalDetailsShellComponent,
    UserCompanyDetailsShellComponent,
    UserDetailsLayoutComponent
  ]
})
export class UserModule { }
