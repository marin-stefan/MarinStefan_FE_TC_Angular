import { Injectable } from '@angular/core';
import { VehicleModel } from './model/VehicleModel';
import { CardModel } from 'src/app/shared/card-template/model/cardModel';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor() { }

  getVehicles(): VehicleModel[]{
    return [
      {
        id: 1,
        name: 'Audi',
        releaseYear : "2018",
        color: 'black',
        carNumber: '124AWQ'
      },
      {
        id: 2,
        name: 'Tesla',
        releaseYear : "2021",
        color: 'red',
        carNumber: '123AOT'
      },
      {
        id: 3,
        name: 'Ford',
        releaseYear : "2017",
        color: 'black',
        carNumber: '800QKJ'
      },
      {
        id: 4,
        name: 'Fiat',
        releaseYear : "2016",
        color: 'gray',
        carNumber: '832HDW'
      },
      {
        id: 5,
        name: 'Renault',
        releaseYear : "2008",
        color: 'blue',
        carNumber: '453WWQ'
      },
      {
        id: 6,
        name: 'Mercedes',
        releaseYear : "2018",
        color: 'green',
        carNumber: '323AWW'
      },
      {
        id: 7,
        name: 'Bmw',
        releaseYear : "2021",
        color: 'orange',
        carNumber: '111PPP'
      },
      {
        id: 8,
        name: 'Citroen',
        releaseYear : "2022",
        color: 'white',
        carNumber: '876AST'
      },
      {
        id: 9,
        name: 'Audi',
        releaseYear : "2015",
        color: 'brown',
        carNumber: '654TRE'
      }
    ]
  }

  mapVehicles():CardModel[]{
    let tempVehicles = this.getVehicles();
    let mappedVehicles = tempVehicles.map((vehicle: VehicleModel) => {
      return {
        id : vehicle.id,
        type:"vehicle",
        displayName : vehicle.name ,
        age: vehicle.releaseYear, 
        property: vehicle.color,
        status: null, 
        specificInfo: vehicle.carNumber,
        specificInfo2: null,
        specificInfo3: null
      }
    })
    return mappedVehicles
  }

}

