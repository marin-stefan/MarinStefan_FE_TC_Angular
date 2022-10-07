import { Pipe, PipeTransform } from '@angular/core';
import { CardModel } from '../modules/shared/interfaces/card-model';

@Pipe({
  name: 'sortByFirstName'
})
export class SortByFirstNamePipe implements PipeTransform {


  transform(value: CardModel[]):CardModel[] {

    // takes CardModel's displayName and extracts firstName from the complete name and sorts cards by it 
    // then returns sorted array or user card of the same CardModel type
    const sorted = value.sort(function(a, b){
      if( ((a.displayName).split(" "))[1] < ((b.displayName).split(" "))[1] ) { return -1; }
      if( ((a.displayName).split(" "))[1] > ((b.displayName).split(" "))[1] ) { return 1; }
      return 0;
    })

    return sorted;
  }

}
