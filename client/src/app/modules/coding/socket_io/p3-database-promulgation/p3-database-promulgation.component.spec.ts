import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P3DatabasePromulgationComponent } from './p3-database-promulgation.component';

describe('P3DatabasePromulgationComponent', () => {
  let component: P3DatabasePromulgationComponent;
  let fixture: ComponentFixture<P3DatabasePromulgationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [P3DatabasePromulgationComponent]
    });
    fixture = TestBed.createComponent(P3DatabasePromulgationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
