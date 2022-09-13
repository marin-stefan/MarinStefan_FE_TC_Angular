import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '../pages/components/homepage/homepage.component';
import { AddUserPageComponent } from '../pages/components/add-user-page/add-user-page.component';
import { Page404Component } from '../pages/components/page404/page404.component';
import { EditUserPageComponent } from '../pages/components/edit-user-page/edit-user-page.component';
import { UsersPageComponent } from '../pages/components/users-page/users-page.component';
import { VehiclesPageComponent } from '../pages/components/vehicles-page/vehicles-page.component';

//setting routes
const appRoute: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomepageComponent},  // temporarily set to userlist page
  {path: 'add-user', component: AddUserPageComponent},
  {path: 'edit-user/:id', component: EditUserPageComponent},
  {path: 'users', component: UsersPageComponent},
  {path: 'vehicles', component: VehiclesPageComponent},
  {path: '**', component: Page404Component}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoute),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
