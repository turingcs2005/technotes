import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P1IntroductionComponent } from './p1-introduction.component';

describe('P1IntroductionComponent', () => {
  let component: P1IntroductionComponent;
  let fixture: ComponentFixture<P1IntroductionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [P1IntroductionComponent]
    });
    fixture = TestBed.createComponent(P1IntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
