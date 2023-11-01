import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P6SubjectsComponent } from './p6-subjects.component';

describe('P6SubjectsComponent', () => {
  let component: P6SubjectsComponent;
  let fixture: ComponentFixture<P6SubjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [P6SubjectsComponent]
    });
    fixture = TestBed.createComponent(P6SubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
