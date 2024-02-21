import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnicalDocumentationRoutingModule } from './technical-documentation-routing.module';
import { TechnicalDocumentationComponent } from './technical-documentation.component';

import { MarkdownModule } from 'ngx-markdown';
import { SecurityContext } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TechnicalDocumentationOverviewComponent } from './technical-documentation-overview/technical-documentation-overview.component';
import { MermaidComponent } from './mermaid/mermaid.component';
import { KatexComponent } from './katex/katex.component';
import { PrismjsComponent } from './prismjs/prismjs.component';

@NgModule({
  declarations: [
    TechnicalDocumentationComponent,
    TechnicalDocumentationOverviewComponent,
    MermaidComponent,
    KatexComponent,
    PrismjsComponent
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
