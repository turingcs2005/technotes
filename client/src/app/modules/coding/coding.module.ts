import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { MarkdownModule } from 'ngx-markdown';
import { SecurityContext } from '@angular/core';

import { CodingRoutingModule } from './coding-routing.module';
import { CodingComponent } from './coding.component';
import { DecoratorsComponent } from './decorators/decorators.component';
import { P1AsyncComponent } from './rxjs/p1-async/p1-async.component';
import { P2ObservablesComponent } from './rxjs/p2-observables/p2-observables.component';
import { P3ObserversComponent } from './rxjs/p3-observers/p3-observers.component';
import { P4SubscriptionComponent } from './rxjs/p4-subscription/p4-subscription.component';
import { P5OperatorsComponent } from './rxjs/p5-operators/p5-operators.component';
import { P6SubjectsComponent } from './rxjs/p6-subjects/p6-subjects.component';

@NgModule({
  declarations: [
    CodingComponent,
    DecoratorsComponent,
    P1AsyncComponent,
    P2ObservablesComponent,
    P3ObserversComponent,
    P4SubscriptionComponent,
    P5OperatorsComponent,
    P6SubjectsComponent,
  ],
  imports: [
    CommonModule,
    CodingRoutingModule,

    SharedModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE
    }),
    MarkdownModule.forChild()
  ]
})
export class CodingModule { }
