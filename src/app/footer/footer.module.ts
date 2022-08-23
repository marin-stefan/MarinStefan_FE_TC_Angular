import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterInfoComponent } from './footer-info/footer-info.component';
import { HeaderModule } from '../header/header.module';


@NgModule({
  declarations: [
    FooterInfoComponent
  ],
  imports: [
    CommonModule, HeaderModule
  ],
  exports: [
    FooterInfoComponent
  ]
})
export class FooterModule { }
