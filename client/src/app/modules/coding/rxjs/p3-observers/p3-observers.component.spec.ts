import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P3ObserversComponent } from './p3-observers.component';

describe('P3ObserversComponent', () => {
  let component: P3ObserversComponent;
  let fixture: ComponentFixture<P3ObserversComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [P3ObserversComponent]
    });
    fixture = TestBed.createComponent(P3ObserversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
