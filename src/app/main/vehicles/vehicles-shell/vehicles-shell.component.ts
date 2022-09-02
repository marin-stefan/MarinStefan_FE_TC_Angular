import { Component, OnInit } from '@angular/core';
import { CardModel } from 'src/app/shared/card-template/model/cardModel';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicles-shell',
  templateUrl: './vehicles-shell.component.html',
  styleUrls: ['./vehicles-shell.component.css']
})
export class VehiclesShellComponent implements OnInit {

  public cards : CardModel[];

  constructor(private _vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.cards = this._vehicleService.mapVehicles();
  }

}
