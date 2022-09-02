import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { UserService } from './main/users/user.service';
import { VehicleService } from './main/vehicles/vehicle.service';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { UsersModule } from './main/users/users.module';
import { VehiclesModule } from './main/vehicles/vehicles.module';
import { AddNewUserComponent } from './main/users/add-new-user/add-new-user.component';
import { PageNotFoundComponent } from './main/pages/page-not-found/page-not-found.component';
import { HomePageComponent } from './main/pages/home-page/home-page.component';
import { PagesModule } from './main/pages/pages.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRoute: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'add-new-user', component: AddNewUserComponent},
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoute),
    FormsModule, 
    ReactiveFormsModule,
    HeaderModule, 
    FooterModule, 
    BrowserAnimationsModule, 
    MatButtonModule, 
    MatIconModule,
    PagesModule,
    UsersModule,
    VehiclesModule,
  ],
  exports: [RouterModule],
  providers: [UserService, VehicleService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
