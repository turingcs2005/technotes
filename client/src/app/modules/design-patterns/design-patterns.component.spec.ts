import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignPatternsComponent } from './design-patterns.component';

describe('DesignPatternsComponent', () => {
  let component: DesignPatternsComponent;
  let fixture: ComponentFixture<DesignPatternsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignPatternsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignPatternsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
