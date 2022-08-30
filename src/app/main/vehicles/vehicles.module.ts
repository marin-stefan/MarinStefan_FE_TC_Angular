import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesListShellComponent } from './vehicles-list-shell/vehicles-list-shell.component';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    VehiclesListShellComponent
  ],
  imports: [
    CommonModule, MatIconModule, SharedModule
  ],
  exports: [
    VehiclesListShellComponent
  ]
})
export class VehiclesModule { }
