import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-geo-autofill',
  templateUrl: './geo-autofill.component.html',
  styleUrls: ['./geo-autofill.component.scss']
})
export class GeoAutofillComponent implements OnInit {

  intakeForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    public api: ApiService
  ) { }

  ngOnInit(): void {
    // form group
    this.intakeForm = this.fb.group({
      state: [''],
      city: [''],
      zipCode: ['']
    });
  }

  onSubmit() {
    console.log('✌️ Geo data sent to database!');
  }

}
