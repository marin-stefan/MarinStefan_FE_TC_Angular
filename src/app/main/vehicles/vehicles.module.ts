import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesShellComponent } from './vehicles-shell/vehicles-shell.component';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    VehiclesShellComponent
  ],
  imports: [
    CommonModule, MatIconModule, SharedModule
  ],
  exports: [
    VehiclesShellComponent
  ]
})
export class VehiclesModule { }
