import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { MyButtonComponent } from './components/my-button/my-button.component';
import { CardTemplateComponent } from './components/card-template/card-template.component';
import { Page404Component } from './components/page404/page404.component';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    SearchBarComponent,
    MyButtonComponent,
    CardTemplateComponent,
    Page404Component,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatCardModule,
    MatButtonModule
    
  ],
  exports: [
    SearchBarComponent,
    MyButtonComponent,
    CardTemplateComponent,
    Page404Component,
    
  ]
})
export class SharedModule { }
