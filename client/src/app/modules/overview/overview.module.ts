import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewComponent } from './overview.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { SoftwareComponent } from './software/software.component';
import { ProgrammingLanguagesComponent } from './programming-languages/programming-languages.component';

import { SharedModule } from '../shared/shared.module';
import { MarkdownModule } from 'ngx-markdown';
import { SecurityContext } from '@angular/core';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { TeamComponent } from './team/team.component';

@NgModule({
  declarations: [
    OverviewComponent,
    TechnologiesComponent,
    SoftwareComponent,
    ProgrammingLanguagesComponent,
    LifecycleComponent,
    TeamComponent
  ],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    SharedModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE
    }),
    MarkdownModule.forChild()
  ]
})
export class OverviewModule { }
