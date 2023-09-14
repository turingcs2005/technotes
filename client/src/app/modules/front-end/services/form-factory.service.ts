import { Injectable } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';
import { Team } from '../calculated-fields/app-data/app-models';

@Injectable({
  providedIn: 'root'
})
export class FormFactoryService {

  teamForm: FormGroup = this.fb.group({
    teamName: ['Northern Lynx', Validators.required],
    managerName: ['Claire', Validators.required],
    players: this.fb.array([
      this.fb.group({
        playerName: ['Sue', Validators.required],
        salary: ['$150,000', Validators.required]
      }),
      this.fb.group({
        playerName: ['Ann', Validators.required],
        salary: ['$200,000', Validators.required]
      })
    ])
  });

  team = new Team(this.teamForm);

  constructor(
    private fb: FormBuilder
  ) { }
}
