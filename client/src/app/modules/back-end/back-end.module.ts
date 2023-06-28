import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackEndRoutingModule } from './back-end-routing.module';
import { BackEndComponent } from './back-end.component';
import { SharedModule } from '../shared/shared.module';
import { MarkdownModule } from 'ngx-markdown';
import { SecurityContext } from '@angular/core';

import { SavingArrayComponent } from './saving-array/saving-array.component';
import { ProjectSetupComponent } from './project-setup/project-setup.component';
import { UsefulPackagesComponent } from './useful-packages/useful-packages.component';
import { DebugComponent } from './debug/debug.component';
import { GeoAutofillComponent } from './geo-autofill/geo-autofill.component';
import { TypescriptESMComponent } from './typescript-esm/typescript-esm.component';
import { PdfGeneratorComponent } from './pdf-generator/pdf-generator.component';

@NgModule({
  declarations: [
    BackEndComponent,
    SavingArrayComponent,
    ProjectSetupComponent,
    UsefulPackagesComponent,
    DebugComponent,
    GeoAutofillComponent,
    TypescriptESMComponent,
    PdfGeneratorComponent
  ],
  imports: [
    CommonModule,
    BackEndRoutingModule,
    SharedModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE
    }),
    MarkdownModule.forChild()
  ]
})
export class BackEndModule { }
