import { Injectable } from '@angular/core';
import { UntypedFormArray } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormToolsService {

  constructor() { }

  removeFormArrayItem(item: UntypedFormArray, index: number){
    item.removeAt(index);
  }

}
