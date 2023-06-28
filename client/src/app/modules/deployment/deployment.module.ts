import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeploymentRoutingModule } from './deployment-routing.module';
import { DeploymentComponent } from './deployment.component';
import { MarkdownModule } from 'ngx-markdown';
import { SecurityContext } from '@angular/core';
import { Pm2Component } from './pm2/pm2.component';
import { AzureComponent } from './azure/azure.component';

@NgModule({
  declarations: [
    DeploymentComponent,
    Pm2Component,
    AzureComponent
  ],
  imports: [
    CommonModule,
    DeploymentRoutingModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE
    }),
    MarkdownModule.forChild()
  ]
})
export class DeploymentModule { }
