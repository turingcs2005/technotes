import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P5OperatorsComponent } from './p5-operators.component';

describe('P5OperatorsComponent', () => {
  let component: P5OperatorsComponent;
  let fixture: ComponentFixture<P5OperatorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [P5OperatorsComponent]
    });
    fixture = TestBed.createComponent(P5OperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
