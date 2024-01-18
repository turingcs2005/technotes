import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalDocumentationComponent } from './technical-documentation.component';

describe('TechnicalDocumentationComponent', () => {
  let component: TechnicalDocumentationComponent;
  let fixture: ComponentFixture<TechnicalDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechnicalDocumentationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechnicalDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
