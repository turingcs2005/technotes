import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActuarialRatingComponent } from './actuarial-rating/actuarial-rating.component';
import { DesignPatternsComponent } from './design-patterns.component';

const routes: Routes = [
  { path: '', component: DesignPatternsComponent },
  { path: 'actuarial-rating', component: ActuarialRatingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignPatternsRoutingModule { }
