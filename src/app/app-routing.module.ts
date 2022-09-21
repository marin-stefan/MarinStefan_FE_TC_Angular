import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserModule } from './modules/user/user.module';
import { VehicleModule } from './modules/vehicle/vehicle.module';
import { Page404Component } from './modules/shared/components/page404/page404.component';
import { SharedModule } from './modules/shared/shared.module';
import { AuthModule } from './modules/auth/auth.module';
import { AppGuard } from './app.guard';
import { RegisterShellComponent } from './modules/auth/containers/register-shell/register-shell.component';
import { LoginShellComponent } from './modules/auth/containers/login-shell/login-shell.component';
import { AuthorizedLayoutComponent } from './modules/auth/components/authorized-layout/authorized-layout.component';
import { NonAuthorizedLayoutComponent } from './modules/auth/components/non-authorized-layout/non-authorized-layout.component';
import { UsersShellComponent } from './modules/user/containers/users-shell/users-shell.component';
import { VehiclesShellComponent } from './modules/vehicle/containers/vehicles-shell/vehicles-shell.component';
import { AddUserShellComponent } from './modules/user/containers/add-user-shell/add-user-shell.component';
import { EditUserShellComponent } from './modules/user/containers/edit-user-shell/edit-user-shell.component';
import { UserAllDetailsShellComponent } from './modules/user/containers/user-all-details-shell/user-all-details-shell.component';
import { UserPersonalDetailsShellComponent } from './modules/user/containers/user-personal-details-shell/user-personal-details-shell.component';
import { UserCompanyDetailsShellComponent } from './modules/user/containers/user-company-details-shell/user-company-details-shell.component';
import { UserDetailsLayoutComponent } from './modules/user/components/user-details-layout/user-details-layout.component';

//setting routes
const appRoute: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},

  {
    path: "",
    component: NonAuthorizedLayoutComponent,
    children: [
      {path: 'login', component : LoginShellComponent},
      {path: 'register', component: RegisterShellComponent},
      {path: '', redirectTo: 'login', pathMatch: 'full' },
      
    ]
  },

  {
    path: "",
    component: AuthorizedLayoutComponent,
    // canActivateChild: [AppGuard],
    children: [
      {path: 'home', component: UsersShellComponent},
      {path: 'users', component: UsersShellComponent },
      {path: 'add-user', component: AddUserShellComponent },
      {path: 'edit-user/:id', component: EditUserShellComponent},

      {
        path: 'users/:id', 
        component: UserDetailsLayoutComponent,
        children : [
          {path: 'all', component : UserAllDetailsShellComponent},
          {path: 'personal', component: UserPersonalDetailsShellComponent},
          {path: 'company', component: UserCompanyDetailsShellComponent}
        ]
          
      },

      {path: 'vehicles', component: VehiclesShellComponent },
      {path: '', redirectTo: 'home', pathMatch: 'full' },
    ]
  },

  {path: '**', component: Page404Component},

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoute),
    UserModule,
    VehicleModule,
    SharedModule,
    AuthModule,
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
