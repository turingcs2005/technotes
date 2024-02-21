import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnicalDocumentationComponent } from './technical-documentation.component';
import { TechnicalDocumentationOverviewComponent } from './technical-documentation-overview/technical-documentation-overview.component';
import { MermaidComponent } from './mermaid/mermaid.component';
import { KatexComponent } from './katex/katex.component';
import { PrismjsComponent } from './prismjs/prismjs.component';

const routes: Routes = [
  { path: '', component: TechnicalDocumentationComponent },
  { path: 'overview', component: TechnicalDocumentationOverviewComponent },
  { path: 'mermaid', component: MermaidComponent},
  { path: 'katex', component: KatexComponent },
  { path: 'prismjs', component: PrismjsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnicalDocumentationRoutingModule { }
