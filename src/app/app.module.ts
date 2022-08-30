import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { FormsModule } from '@angular/forms';
import { UserService } from './main/users/user.service';
import { VehicleService } from './main/vehicles/vehicle.service';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { UsersModule } from './main/users/users.module';
import { VehiclesModule } from './main/vehicles/vehicles.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    HeaderModule, 
    FooterModule, 
    FormsModule, 
    BrowserAnimationsModule, 
    MatButtonModule, 
    MatIconModule,
    UsersModule,
    VehiclesModule
  ],
  providers: [UserService, VehicleService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
