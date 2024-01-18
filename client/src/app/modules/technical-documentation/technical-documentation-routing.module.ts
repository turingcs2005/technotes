import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnicalDocumentationComponent } from './technical-documentation.component';

const routes: Routes = [{ path: '', component: TechnicalDocumentationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnicalDocumentationRoutingModule { }
