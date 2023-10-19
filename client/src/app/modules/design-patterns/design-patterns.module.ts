import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { SecurityContext } from '@angular/core';
import { DesignPatternsRoutingModule } from './design-patterns-routing.module';
import { DesignPatternsComponent } from './design-patterns.component';
import { ActuarialRatingComponent } from './actuarial-rating/actuarial-rating.component';
import { EndorsementComponent } from './endorsement/endorsement.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DesignPatternsComponent,
    ActuarialRatingComponent,
    EndorsementComponent
  ],
  imports: [
    CommonModule,
    DesignPatternsRoutingModule,
    SharedModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE
    }),
    MarkdownModule.forChild()
  ]
})
export class DesignPatternsModule { }
