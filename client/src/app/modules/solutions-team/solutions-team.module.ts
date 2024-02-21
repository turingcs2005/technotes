import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityContext } from '@angular/core';

import { SolutionsTeamRoutingModule } from './solutions-team-routing.module';
import { SolutionsTeamComponent } from './solutions-team.component';
import { WhatSetUsApartComponent } from './what-set-us-apart/what-set-us-apart.component';
import { CurrentMembersComponent } from './current-members/current-members.component';
import { CurrentProjectsComponent } from './current-projects/current-projects.component';
import { SharedModule } from '../shared/shared.module';
import { MarkdownModule } from 'ngx-markdown';


@NgModule({
  declarations: [
    SolutionsTeamComponent,
    WhatSetUsApartComponent,
    CurrentMembersComponent,
    CurrentProjectsComponent,
  ],
  imports: [
    CommonModule,
    SolutionsTeamRoutingModule,
    SharedModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE
    }),
    MarkdownModule.forChild()
  ]
})
export class SolutionsTeamModule { }
