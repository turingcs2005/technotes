import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalDocumentationOverviewComponent } from './technical-documentation-overview.component';

describe('TechnicalDocumentationOverviewComponent', () => {
  let component: TechnicalDocumentationOverviewComponent;
  let fixture: ComponentFixture<TechnicalDocumentationOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechnicalDocumentationOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechnicalDocumentationOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
