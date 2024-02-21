import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsTeamComponent } from './solutions-team.component';

describe('SolutionsTeamComponent', () => {
  let component: SolutionsTeamComponent;
  let fixture: ComponentFixture<SolutionsTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SolutionsTeamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolutionsTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
