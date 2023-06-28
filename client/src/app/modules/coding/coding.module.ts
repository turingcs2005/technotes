import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { MarkdownModule } from 'ngx-markdown';
import { SecurityContext } from '@angular/core';

import { CodingRoutingModule } from './coding-routing.module';
import { CodingComponent } from './coding.component';
import { DecoratorsComponent } from './decorators/decorators.component';
import { ObservableComponent } from './observable/observable.component';

@NgModule({
  declarations: [
    CodingComponent,
    DecoratorsComponent,
    ObservableComponent
  ],
  imports: [
    CommonModule,
    CodingRoutingModule,

    SharedModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE
    }),
    MarkdownModule.forChild()
  ]
})
export class CodingModule { }
