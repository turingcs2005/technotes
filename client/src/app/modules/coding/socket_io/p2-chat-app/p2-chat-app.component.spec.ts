import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P2ChatAppComponent } from './p2-chat-app.component';

describe('P2ChatAppComponent', () => {
  let component: P2ChatAppComponent;
  let fixture: ComponentFixture<P2ChatAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [P2ChatAppComponent]
    });
    fixture = TestBed.createComponent(P2ChatAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
