import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UIFreezeSpinnerComponent } from './ui-freeze-spinner.component';

describe('UIFreezeSpinnerComponent', () => {
  let component: UIFreezeSpinnerComponent;
  let fixture: ComponentFixture<UIFreezeSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UIFreezeSpinnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UIFreezeSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
