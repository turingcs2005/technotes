import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodingComponent } from './coding.component';
import { DecoratorsComponent } from './decorators/decorators.component';
import { P1AsyncComponent } from './rxjs/p1-async/p1-async.component';
import { P2ObservablesComponent } from './rxjs/p2-observables/p2-observables.component';
import { P3ObserversComponent } from './rxjs/p3-observers/p3-observers.component';
import { P4SubscriptionComponent } from './rxjs/p4-subscription/p4-subscription.component';
import { P5OperatorsComponent } from './rxjs/p5-operators/p5-operators.component';
import { P6SubjectsComponent } from './rxjs/p6-subjects/p6-subjects.component';
import { P1IntroductionComponent } from './socket_io/p1-introduction/p1-introduction.component';
import { P2ChatAppComponent } from './socket_io/p2-chat-app/p2-chat-app.component';
import { P3DatabasePromulgationComponent } from './socket_io/p3-database-promulgation/p3-database-promulgation.component';

const routes: Routes = [
  { path: '', component: CodingComponent },
  { path: 'decorators', component: DecoratorsComponent },
  { path: 'rxjs/p1_async', component: P1AsyncComponent },
  { path: 'rxjs/p2_observables', component: P2ObservablesComponent },
  { path: 'rxjs/p3_observers', component: P3ObserversComponent },
  { path: 'rxjs/p4_subscription', component: P4SubscriptionComponent },
  { path: 'rxjs/p5_operators', component: P5OperatorsComponent },
  { path: 'rxjs/p6_subjects', component: P6SubjectsComponent },
  { path: 'socket-io/p1-introduction', component: P1IntroductionComponent },
  { path: 'socket-io/p2-chat_app', component: P2ChatAppComponent },
  { path: 'socket-io/p3-database_promulgation', component: P3DatabasePromulgationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodingRoutingModule { }
