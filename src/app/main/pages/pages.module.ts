import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UsersModule } from '../users/users.module';
import { VehiclesModule } from '../vehicles/vehicles.module';



@NgModule({
  declarations: [
    PageNotFoundComponent,
    HomePageComponent,
  ],
  imports: [
    CommonModule, UsersModule, VehiclesModule
  ],
  exports: [
    PageNotFoundComponent, HomePageComponent
  ]
})
export class PagesModule { }
