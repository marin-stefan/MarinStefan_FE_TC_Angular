import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'editAgeAddTen'
})
export class EditAgeAddTenPipe implements PipeTransform {

  // i have a stupid system that needs changing
  //in my models age is a string - "Age : 21" 
  
  transform(value: string ): string {
    let age = +(value.split(" "))[1];
     return "Age: " + ((age + 10).toString()) + " years old";
  }

}
