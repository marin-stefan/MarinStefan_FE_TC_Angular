import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesShellComponent } from './containers/vehicles-shell/vehicles-shell.component';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  declarations: [
    VehiclesShellComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    SharedModule,
    HeaderModule,
    FooterModule
  ],
  exports: [
    VehiclesShellComponent,
  ]
})
export class VehicleModule { }
