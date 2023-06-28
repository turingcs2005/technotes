import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabaseComponent } from './database.component';
import { MongodbComponent } from './mongodb/mongodb.component';
import { SequelizeTransactionsComponent } from './sequelize-transactions/sequelize-transactions.component';
import { SqlComponent } from './sql/sql.component';

const routes: Routes = [
  { path: '', component: DatabaseComponent },
  { path: 'sql', component: SqlComponent },
  { path: 'mongodb', component: MongodbComponent },
  { path: 'sequelize-transactions', component: SequelizeTransactionsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatabaseRoutingModule { }
