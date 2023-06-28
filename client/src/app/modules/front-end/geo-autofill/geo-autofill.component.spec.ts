import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoAutofillComponent } from './geo-autofill.component';

describe('GeoAutofillComponent', () => {
  let component: GeoAutofillComponent;
  let fixture: ComponentFixture<GeoAutofillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoAutofillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeoAutofillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
