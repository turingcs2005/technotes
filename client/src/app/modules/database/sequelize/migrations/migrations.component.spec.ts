import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrationsComponent } from './migrations.component';

describe('MigrationsComponent', () => {
  let component: MigrationsComponent;
  let fixture: ComponentFixture<MigrationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MigrationsComponent]
    });
    fixture = TestBed.createComponent(MigrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
