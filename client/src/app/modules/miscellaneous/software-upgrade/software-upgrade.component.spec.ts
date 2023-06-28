import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareUpgradeComponent } from './software-upgrade.component';

describe('SoftwareUpgradeComponent', () => {
  let component: SoftwareUpgradeComponent;
  let fixture: ComponentFixture<SoftwareUpgradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareUpgradeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareUpgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
