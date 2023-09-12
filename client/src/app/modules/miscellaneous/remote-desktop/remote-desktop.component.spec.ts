import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteDesktopComponent } from './remote-desktop.component';

describe('RemoteDesktopComponent', () => {
  let component: RemoteDesktopComponent;
  let fixture: ComponentFixture<RemoteDesktopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoteDesktopComponent]
    });
    fixture = TestBed.createComponent(RemoteDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
