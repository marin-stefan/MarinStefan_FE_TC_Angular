import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserModule } from './modules/user/user.module';
import { VehicleModule } from './modules/vehicle/vehicle.module';
import { Page404Component } from './modules/shared/components/page404/page404.component';
import { SharedModule } from './modules/shared/shared.module';
import { UsersPageComponent } from './modules/user/containers/users-shell/users-page/users-page.component';
import { AddUserPageComponent } from './modules/user/containers/add-user-shell/add-user-page/add-user-page.component';
import { EditUserPageComponent } from './modules/user/containers/edit-user-shell/edit-user-page/edit-user-page.component';
import { VehiclesPageComponent } from './modules/vehicle/containers/vehicles-shell/vehicles-page/vehicles-page.component';
import { AuthModule } from './modules/auth/auth.module';
import { RegisterComponent } from './modules/auth/components/register/register.component';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { AppGuardGuard } from './app-guard.guard';

//setting routes
const appRoute: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'home', component: UsersPageComponent, canActivate: [AppGuardGuard]}, // redirect to userspage
  {path: 'add-user', component: AddUserPageComponent, canActivate: [AppGuardGuard]},
  {path: 'edit-user/:id', component: EditUserPageComponent, canActivate: [AppGuardGuard]},
  {path: 'users', component: UsersPageComponent, canActivate: [AppGuardGuard]},
  {path: 'vehicles', component: VehiclesPageComponent, canActivate: [AppGuardGuard]},
  {path: 'login', component : LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: Page404Component}

  // {
  //   path: "not-auth",
  //   component: LayoutForNonLoggedUsersComponent,
  //   children: [
  //     // {path: 'login', component : LoginComponent},
  //     // {path: 'register', component: RegisterComponent},
  //   ]
  // },
  // {
  //   path: "auth",
  //   component: LayoutForLoggedUsersComponent,
  //   children: [
  //     {path: 'add-user', component: AddUserPageComponent},
  //     {path: 'edit-user/:id', component: EditUserPageComponent,},
  //    {path: 'users', component: UsersPageComponent},
  //    {path: 'vehicles', component: VehiclesPageComponent},
  //   ]
  // }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoute),
    UserModule,
    VehicleModule,
    SharedModule,
    AuthModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
