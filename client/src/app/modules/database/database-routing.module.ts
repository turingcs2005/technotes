import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabaseComponent } from './database.component';
import { MongodbComponent } from './mongodb/mongodb.component';
import { SqlComponent } from './sql/sql.component';
import { TransactionsComponent } from './sequelize/transactions/transactions.component';
import { MigrationsComponent } from './sequelize/migrations/migrations.component';

const routes: Routes = [
  { path: '', component: DatabaseComponent },
  { path: 'sql', component: SqlComponent },
  { path: 'mongodb', component: MongodbComponent },
  { path: 'sequelize/transactions', component: TransactionsComponent },
  { path: 'sequelize/migrations', component: MigrationsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatabaseRoutingModule { }
