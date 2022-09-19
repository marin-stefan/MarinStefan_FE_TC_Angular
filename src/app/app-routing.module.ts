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
import { RegisterComponent } from './modules/auth/containers/register/register.component';
import { LoginComponent } from './modules/auth/containers/login/login.component';
import { AppGuard } from './app.guard';
import { UserDetailsPageComponent } from './modules/user/containers/user-details-shell/user-details-page/user-details-page.component';

//setting routes
const appRoute: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: UsersPageComponent, canActivate: [AppGuard] }, // redirect to userspage
  {path: 'add-user', component: AddUserPageComponent, canActivate: [AppGuard] },
  {path: 'edit-user/:id', component: EditUserPageComponent, canActivate: [AppGuard] },
  {path: 'users', component: UsersPageComponent, canActivate: [AppGuard] },
  {path: 'users/:id', component: UserDetailsPageComponent, canActivate: [AppGuard] },
  {path: 'vehicles', component: VehiclesPageComponent, canActivate: [AppGuard] },
  {path: 'login', component : LoginComponent },
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
