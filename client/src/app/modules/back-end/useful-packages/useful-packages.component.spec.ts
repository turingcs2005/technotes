import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsefulPackagesComponent } from './useful-packages.component';

describe('UsefulPackagesComponent', () => {
  let component: UsefulPackagesComponent;
  let fixture: ComponentFixture<UsefulPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsefulPackagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsefulPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
