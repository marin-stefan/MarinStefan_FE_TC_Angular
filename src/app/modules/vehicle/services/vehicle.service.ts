import { Injectable } from '@angular/core';
import { VehicleModel } from '../interfaces/vehicle-model';
import { CardModel } from '../../shared/interfaces/card-model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  // our mock BD array of vehicleModel objects
  dbVehicles: VehicleModel[] = [
    {
      id: 1,
      name: 'Audi',
      releaseYear : "2018",
      color: 'black',
      carNumber: '124AWQ',
      picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8u9pDa725wiLwCim2ljxZ2xdw-EHd3iaPjg&usqp=CAU'
    },
    {
      id: 2,
      name: 'Tesla',
      releaseYear : "2021",
      color: 'red',
      carNumber: '123AOT',
      picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8u9pDa725wiLwCim2ljxZ2xdw-EHd3iaPjg&usqp=CAU'
    },
    {
      id: 3,
      name: 'Ford',
      releaseYear : "2017",
      color: 'black',
      carNumber: '800QKJ',
      picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8u9pDa725wiLwCim2ljxZ2xdw-EHd3iaPjg&usqp=CAU'
    },
    {
      id: 4,
      name: 'Fiat',
      releaseYear : "2016",
      color: 'gray',
      carNumber: '832HDW',
      picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8u9pDa725wiLwCim2ljxZ2xdw-EHd3iaPjg&usqp=CAU'
    },
    {
      id: 5,
      name: 'Renault',
      releaseYear : "2008",
      color: 'blue',
      carNumber: '453WWQ',
      picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8u9pDa725wiLwCim2ljxZ2xdw-EHd3iaPjg&usqp=CAU'
    },
    {
      id: 6,
      name: 'Mercedes',
      releaseYear : "2018",
      color: 'green',
      carNumber: '323AWW',
      picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8u9pDa725wiLwCim2ljxZ2xdw-EHd3iaPjg&usqp=CAU'
    },
    {
      id: 7,
      name: 'Bmw',
      releaseYear : "2021",
      color: 'orange',
      carNumber: '111PPP',
      picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8u9pDa725wiLwCim2ljxZ2xdw-EHd3iaPjg&usqp=CAU'
    },
    {
      id: 8,
      name: 'Citroen',
      releaseYear : "2022",
      color: 'white',
      carNumber: '876AST',
      picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8u9pDa725wiLwCim2ljxZ2xdw-EHd3iaPjg&usqp=CAU'
    },
    {
      id: 9,
      name: 'Audi',
      releaseYear : "2015",
      color: 'brown',
      carNumber: '654TRE',
      picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8u9pDa725wiLwCim2ljxZ2xdw-EHd3iaPjg&usqp=CAU'
    }
  ];

  constructor() { }

  getVehicles():VehicleModel[]{
    //returs list of all vehicle objects
    return this.dbVehicles;
  };

  mapVehicles():CardModel[]{
    //maps vechile object to card template options
    let tempVehicles = this.getVehicles();
    let mappedVehicles = tempVehicles.map((vehicle: VehicleModel) => {
      return {
        id : vehicle.id,
        type:"vehicle",
        displayName : vehicle.name ,
        age: vehicle.releaseYear, 
        property: vehicle.color,
        status: null,
        picture: vehicle.picture, 
        specificInfo: vehicle.carNumber,
        specificInfo2: null,
        specificInfo3: null,
        specificInfo4: null,
        specificInfo5: null,
        specificInfo6: null
      }
    });
    return mappedVehicles;
  };

}
