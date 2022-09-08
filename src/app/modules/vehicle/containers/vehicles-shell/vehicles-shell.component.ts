import { Component, OnInit } from '@angular/core';
import { CardModel } from 'src/app/modules/shared/interfaces/card-model';
import { VehicleService } from '../../services/vehicle.service';

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
