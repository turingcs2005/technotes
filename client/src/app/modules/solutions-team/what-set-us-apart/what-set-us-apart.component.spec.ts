import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatSetUsApartComponent } from './what-set-us-apart.component';

describe('WhatSetUsApartComponent', () => {
  let component: WhatSetUsApartComponent;
  let fixture: ComponentFixture<WhatSetUsApartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhatSetUsApartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhatSetUsApartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
