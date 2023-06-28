import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescriptESMComponent } from './typescript-esm.component';

describe('TypescriptESMComponent', () => {
  let component: TypescriptESMComponent;
  let fixture: ComponentFixture<TypescriptESMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypescriptESMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypescriptESMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
