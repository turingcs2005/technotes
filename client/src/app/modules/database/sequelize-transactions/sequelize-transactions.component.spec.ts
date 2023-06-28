import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SequelizeTransactionsComponent } from './sequelize-transactions.component';

describe('SequelizeTransactionsComponent', () => {
  let component: SequelizeTransactionsComponent;
  let fixture: ComponentFixture<SequelizeTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SequelizeTransactionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SequelizeTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
