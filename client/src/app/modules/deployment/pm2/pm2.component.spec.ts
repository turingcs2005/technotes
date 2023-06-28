import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pm2Component } from './pm2.component';

describe('Pm2Component', () => {
  let component: Pm2Component;
  let fixture: ComponentFixture<Pm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pm2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
