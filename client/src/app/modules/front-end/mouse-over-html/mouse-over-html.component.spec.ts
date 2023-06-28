import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseOverHtmlComponent } from './mouse-over-html.component';

describe('MouseOverHtmlComponent', () => {
  let component: MouseOverHtmlComponent;
  let fixture: ComponentFixture<MouseOverHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MouseOverHtmlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MouseOverHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
