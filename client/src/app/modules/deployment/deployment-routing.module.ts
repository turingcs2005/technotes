import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AzureComponent } from './azure/azure.component';
import { DeploymentComponent } from './deployment.component';
import { Pm2Component } from './pm2/pm2.component';

const routes: Routes = [
  { path: '', component: DeploymentComponent },
  { path: 'pm2', component: Pm2Component },
  { path: 'azure', component: AzureComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeploymentRoutingModule { }
