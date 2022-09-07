import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderLogoComponent } from './components/header-logo/header-logo.component';
import { HeaderComponent } from './containers/header-shell/header.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { HeaderNavbarComponent } from './components/header-navbar/header-navbar.component';



@NgModule({
  declarations: [
    HeaderLogoComponent,
    HeaderComponent,
    HeaderMenuComponent,
    HeaderNavbarComponent,
  ],
  imports: [
    CommonModule, 
    MatButtonModule, 
    MatIconModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
