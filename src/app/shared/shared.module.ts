import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyButtonComponent } from './my-button/my-button.component';
import { CardTemplateComponent } from './card-template/card-template.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    MyButtonComponent,
    CardTemplateComponent
  ],
  imports: [
    CommonModule, MatButtonModule,
  ],
  exports: [
    MyButtonComponent, CardTemplateComponent
  ]
})
export class SharedModule { }
