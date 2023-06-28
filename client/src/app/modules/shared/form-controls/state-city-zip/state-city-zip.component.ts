import { Component, OnInit, Input } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';

@Component({
  selector: 'app-state-city-zip',
  templateUrl: './state-city-zip.component.html',
  styleUrls: ['./state-city-zip.component.scss']
})
export class StateCityZipComponent implements OnInit {
  
  // state
  @Input() stateLabel = 'State';
  @Input() stateControl = new UntypedFormControl();
  @Input() stateToolTip: string = '';
  @Input() stateSize: string  = 'narrow-input';
  @Input() stateIcon = 'mail';  

  // city
  @Input() cityLabel = 'City';
  @Input() cityControl = new UntypedFormControl();
  @Input() cityToolTip: string = '';
  @Input() citySize: string  = 'medium-plus1-input';
  @Input() cityIcon = 'mail';  
  
  // zip code
  @Input() zipCodeLabel = 'ZIP code';
  @Input() zipCodeControl = new UntypedFormControl();
  @Input() zipCodeToolTip: string = '';
  @Input() zipCodeSize: string  = 'medium-input';
  @Input() zipCodeIcon = 'mail';  

  // APIs
  // 🔥 By default, only 50 states + DC are returned. If you need US overseas territories or Puerto Rico, modify geo-validators state API. */
  @Input() getStateList: () => Observable<{states: {abbr: string, name: string}[]}>;
  @Input() getCityList: (v: string) => Observable<{cities: string[]}>;
  @Input() getZipCodeList: (state: string, city: string) => Observable<{zip_codes: string[]}>;

  stateList: string[] = [''];
  cityList: string[] = [''];
  zipCodeList: string[] = [''];

  filteredStateOptions: Observable<string[]>;
  filteredCityOptions: Observable<string[]>;
  filteredZipCodeOptions: Observable<string[]>;

  constructor() { }

  ngOnInit(): void {
        // get state list via API call
    this.getStateList().subscribe(
      {
        next: data => {this.stateList = data.states.map( (x: any) => x.abbr)},
        error: e => {console.error(e)},
        complete: () => {console.info('State list acquisition complete.')}
      }
    );

    this.stateControl.valueChanges.subscribe({
      next: v => {
        // if state is a valid US state
        if (this.stateList.includes(v)) {
          // get city list via API call
          this.getCityList(v).subscribe(
            {
              next: data => { 
                this.cityList = data.cities; 
              },
              error: e => {console.error(e)},
              complete: () => {console.info(`City list acquisition for ${v} complete.`)}
            }
          )
        }
      },
      error: e => {console.error(e)},
      complete: () => {console.info('State value changed.')}
    });

    this.cityControl.valueChanges.subscribe({
      next: v => {
        // if state is a valid US state and city is a valid US city
        if (this.stateList.includes(this.stateControl.value) && this.cityList.includes(v)) {
          this.getZipCodeList(this.stateControl.value, v).subscribe(
            {
              next: data => {
                // if there is one ZIP code for that city, auto-populate ZIP code
                if (data.zip_codes.length === 1) {
                  this.zipCodeControl.setValue(data.zip_codes[0]);
                }
                this.zipCodeList = data.zip_codes;
              },
              error: e => {console.error(e)},
              complete: () => {console.info(`ZIP code list acquisition for ${v} complete.`)}
            }
          )
        }
      },
      error: e => {console.error(e)},
      complete: () => {console.info('City value changed.')}
    });

    this.filteredStateOptions = this.stateControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterState(value || '')),
    );

    this.filteredCityOptions = this.cityControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterCity(value || '')),
    );

    this.filteredZipCodeOptions = this.zipCodeControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterZipCode(value || '')),
    );
  }

  private _filterState(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.stateList.filter(option => option.toLowerCase().startsWith(filterValue));
  }

  private _filterCity(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.cityList.filter(option => option.toLowerCase().startsWith(filterValue));
  }

  private _filterZipCode(value: string): string[] {
    const filterValue = value;
    return this.zipCodeList.filter(option => option.startsWith(filterValue));
  }

}
