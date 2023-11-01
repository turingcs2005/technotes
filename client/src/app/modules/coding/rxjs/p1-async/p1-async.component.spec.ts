import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P1AsyncComponent } from './p1-async.component';

describe('P1AsyncComponent', () => {
  let component: P1AsyncComponent;
  let fixture: ComponentFixture<P1AsyncComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [P1AsyncComponent]
    });
    fixture = TestBed.createComponent(P1AsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
