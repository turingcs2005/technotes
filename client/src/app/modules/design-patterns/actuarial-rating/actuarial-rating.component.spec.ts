import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuarialRatingComponent } from './actuarial-rating.component';

describe('ActuarialRatingComponent', () => {
  let component: ActuarialRatingComponent;
  let fixture: ComponentFixture<ActuarialRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActuarialRatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActuarialRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
