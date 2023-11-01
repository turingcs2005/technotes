import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P4SubscriptionComponent } from './p4-subscription.component';

describe('P4SubscriptionComponent', () => {
  let component: P4SubscriptionComponent;
  let fixture: ComponentFixture<P4SubscriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [P4SubscriptionComponent]
    });
    fixture = TestBed.createComponent(P4SubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
