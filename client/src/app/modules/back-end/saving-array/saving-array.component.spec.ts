import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingArrayComponent } from './saving-array.component';

describe('SavingArrayComponent', () => {
  let component: SavingArrayComponent;
  let fixture: ComponentFixture<SavingArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavingArrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavingArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
