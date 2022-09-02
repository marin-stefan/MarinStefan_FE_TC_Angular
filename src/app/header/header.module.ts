import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { HeaderLogoComponent } from './header-logo/header-logo.component';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    SearchBarComponent,
    HeaderMenuComponent,
    HeaderLogoComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule, FormsModule, MatButtonModule, RouterModule
  ],
  exports: [
    SearchBarComponent, HeaderMenuComponent, HeaderLogoComponent, NavBarComponent
  ]
})
export class HeaderModule { }
