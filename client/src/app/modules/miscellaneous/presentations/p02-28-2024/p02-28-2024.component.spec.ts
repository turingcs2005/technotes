import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P02282024Component } from './p02-28-2024.component';

describe('P02282024Component', () => {
  let component: P02282024Component;
  let fixture: ComponentFixture<P02282024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [P02282024Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P02282024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
