import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolutionsTeamComponent } from './solutions-team.component';
import { CurrentMembersComponent } from './current-members/current-members.component';
import { CurrentProjectsComponent } from './current-projects/current-projects.component';
import { WhatSetUsApartComponent } from './what-set-us-apart/what-set-us-apart.component';

const routes: Routes = [
  { path: '', component: SolutionsTeamComponent },
  { path: 'current-members', component: CurrentMembersComponent },
  { path: 'current-projects', component: CurrentProjectsComponent },
  { path: 'what-set-us-apart', component: WhatSetUsApartComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolutionsTeamRoutingModule { }
