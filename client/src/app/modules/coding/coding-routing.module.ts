import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodingComponent } from './coding.component';
import { DecoratorsComponent } from './decorators/decorators.component';

const routes: Routes = [
  { path: '', component: CodingComponent },
  { path: 'decorators', component: DecoratorsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodingRoutingModule { }
