import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActuarialRatingComponent } from './actuarial-rating/actuarial-rating.component';
import { DesignPatternsComponent } from './design-patterns.component';
import { EndorsementComponent } from './endorsement/endorsement.component';

const routes: Routes = [
  { path: '', component: DesignPatternsComponent },
  { path: 'actuarial-rating', component: ActuarialRatingComponent },
  { path: 'endorsement', component: EndorsementComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignPatternsRoutingModule { }
