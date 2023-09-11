import { Pipe, PipeTransform } from '@angular/core';
import { Team } from '../calculated-fields/app-data/app-models';
import { FormArray } from '@angular/forms';

@Pipe({
  name: 'salary',
  pure: false
})
export class SalaryPipe implements PipeTransform {

  transform(players: FormArray): number {
    return players.controls.map(x => Number(x.get('salary').value) ).reduce( (a, b) => a + b );
  }

}
