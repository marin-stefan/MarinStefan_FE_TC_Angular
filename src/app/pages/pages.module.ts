import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { UserModule } from '../user/user.module';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AddUserPageComponent } from './components/add-user-page/add-user-page.component';
import { Page404Component } from './components/page404/page404.component';
import { EditUserPageComponent } from './components/edit-user-page/edit-user-page.component';
import { UsersPageComponent } from './components/users-page/users-page.component';
import { VehiclesPageComponent } from './components/vehicles-page/vehicles-page.component';
import { VehicleModule } from '../vehicle/vehicle.module';



@NgModule({
  declarations: [
    HomepageComponent,
    AddUserPageComponent,
    Page404Component,
    EditUserPageComponent,
    UsersPageComponent,
    VehiclesPageComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    UserModule,
    VehicleModule
  ],
  exports: [
    HomepageComponent,
    AddUserPageComponent,
    Page404Component,
    EditUserPageComponent,
    UsersPageComponent,
    VehiclesPageComponent
  ]
})
export class PagesModule { }
