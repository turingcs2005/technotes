import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { OverviewComponent } from './overview.component';
import { ProgrammingLanguagesComponent } from './programming-languages/programming-languages.component';
import { SoftwareComponent } from './software/software.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { path: '', component: OverviewComponent },
  { path: 'technologies', component: TechnologiesComponent },
  { path: 'software', component: SoftwareComponent },
  { path: 'programming-languages', component: ProgrammingLanguagesComponent },
  { path: 'lifecycle', component: LifecycleComponent },
  { path: 'team', component: TeamComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverviewRoutingModule { }
