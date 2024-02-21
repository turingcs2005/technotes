import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrismjsComponent } from './prismjs.component';

describe('PrismjsComponent', () => {
  let component: PrismjsComponent;
  let fixture: ComponentFixture<PrismjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrismjsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrismjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
