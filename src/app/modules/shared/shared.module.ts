import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { MyButtonComponent } from './components/my-button/my-button.component';
import { CardTemplateComponent } from './components/card-template/card-template.component';
import { Page404Component } from './components/page404/page404.component';
import { RouterModule } from '@angular/router';
import { UserDetailsCardComponent } from './components/user-details-card/user-details-card.component';


@NgModule({
  declarations: [
    SearchBarComponent,
    MyButtonComponent,
    CardTemplateComponent,
    Page404Component,
    UserDetailsCardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    
  ],
  exports: [
    SearchBarComponent,
    MyButtonComponent,
    CardTemplateComponent,
    Page404Component,
    UserDetailsCardComponent
  ]
})
export class SharedModule { }
