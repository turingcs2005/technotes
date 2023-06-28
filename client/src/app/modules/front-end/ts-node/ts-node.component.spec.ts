import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsNodeComponent } from './ts-node.component';

describe('TsNodeComponent', () => {
  let component: TsNodeComponent;
  let fixture: ComponentFixture<TsNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TsNodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TsNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
