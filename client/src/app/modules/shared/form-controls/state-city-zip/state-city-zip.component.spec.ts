import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateCityZipComponent } from './state-city-zip.component';

describe('StateCityZipComponent', () => {
  let component: StateCityZipComponent;
  let fixture: ComponentFixture<StateCityZipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StateCityZipComponent]
    });
    fixture = TestBed.createComponent(StateCityZipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
