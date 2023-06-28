import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatabaseRoutingModule } from './database-routing.module';
import { DatabaseComponent } from './database.component';
import { MarkdownModule } from 'ngx-markdown';
import { SecurityContext } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SqlComponent } from './sql/sql.component';
import { MongodbComponent } from './mongodb/mongodb.component';
import { SequelizeTransactionsComponent } from './sequelize-transactions/sequelize-transactions.component';

@NgModule({
  declarations: [
    DatabaseComponent,
    SqlComponent,
    MongodbComponent,
    SequelizeTransactionsComponent
  ],
  imports: [
    CommonModule,
    DatabaseRoutingModule,
    SharedModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE
    }),
    MarkdownModule.forChild()
  ]
})
export class DatabaseModule { }
