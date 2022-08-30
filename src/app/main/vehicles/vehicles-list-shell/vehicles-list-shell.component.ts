import { Component, OnInit } from '@angular/core';
import { CardModel } from 'src/app/shared/card-template/model/cardModel';
import { CardTemplateComponent } from 'src/app/shared/card-template/card-template.component';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicles-list-shell',
  templateUrl: './vehicles-list-shell.component.html',
  styleUrls: ['./vehicles-list-shell.component.css']
})
export class VehiclesListShellComponent implements OnInit {

  public cards : CardModel[];

  constructor(private _vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.cards = this._vehicleService.mapVehicles();
  }

}
