import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { HeaderLogoComponent } from './header-logo/header-logo.component';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';




@NgModule({
  declarations: [
    SearchBarComponent,
    HeaderMenuComponent,
    HeaderLogoComponent
  ],
  imports: [
    CommonModule, FormsModule, MatButtonModule
  ],
  exports: [
    SearchBarComponent, HeaderMenuComponent, HeaderLogoComponent
  ]
})
export class HeaderModule { }
