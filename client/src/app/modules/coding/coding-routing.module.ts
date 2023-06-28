import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodingComponent } from './coding.component';
import { DecoratorsComponent } from './decorators/decorators.component';
import { ObservableComponent } from './observable/observable.component';

const routes: Routes = [
  { path: '', component: CodingComponent },
  { path: 'decorators', component: DecoratorsComponent },
  { path: 'observable', component: ObservableComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodingRoutingModule { }
