import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnicalDocumentationRoutingModule } from './technical-documentation-routing.module';
import { TechnicalDocumentationComponent } from './technical-documentation.component';

import { MarkdownModule } from 'ngx-markdown';
import { SecurityContext } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TechnicalDocumentationComponent
  ],
  imports: [
    CommonModule,
    TechnicalDocumentationRoutingModule,
    SharedModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE
    }),
    MarkdownModule.forChild()
  ]
})
export class TechnicalDocumentationModule { }
