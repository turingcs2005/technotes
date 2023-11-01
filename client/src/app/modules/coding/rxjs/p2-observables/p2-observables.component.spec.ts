import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P2ObservablesComponent } from './p2-observables.component';

describe('P2ObservablesComponent', () => {
  let component: P2ObservablesComponent;
  let fixture: ComponentFixture<P2ObservablesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [P2ObservablesComponent]
    });
    fixture = TestBed.createComponent(P2ObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
