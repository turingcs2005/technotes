import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiraCodeComponent } from './fira-code.component';

describe('FiraCodeComponent', () => {
  let component: FiraCodeComponent;
  let fixture: ComponentFixture<FiraCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiraCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiraCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
