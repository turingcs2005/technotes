import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { SecurityContext } from '@angular/core';
import { DesignPatternsRoutingModule } from './design-patterns-routing.module';
import { DesignPatternsComponent } from './design-patterns.component';
import { ActuarialRatingComponent } from './actuarial-rating/actuarial-rating.component';


@NgModule({
  declarations: [
    DesignPatternsComponent,
    ActuarialRatingComponent
  ],
  imports: [
    CommonModule,
    DesignPatternsRoutingModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE
    }),
    MarkdownModule.forChild()
  ]
})
export class DesignPatternsModule { }
