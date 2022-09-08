import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { MyButtonComponent } from './components/my-button/my-button.component';
import { CardTemplateComponent } from './components/card-template/card-template.component';



@NgModule({
  declarations: [
    SearchBarComponent,
    MyButtonComponent,
    CardTemplateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    SearchBarComponent,
    MyButtonComponent,
    CardTemplateComponent
  ]
})
export class SharedModule { }
