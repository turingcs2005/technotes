import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkTooltipComponent } from './cdk-tooltip.component';

describe('CdkTooltipComponent', () => {
  let component: CdkTooltipComponent;
  let fixture: ComponentFixture<CdkTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdkTooltipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdkTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
