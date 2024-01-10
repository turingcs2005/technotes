import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontEndRoutingModule } from './front-end-routing.module';
import { FrontEndComponent } from './front-end.component';

import { SharedModule } from '../shared/shared.module';
import { MarkdownModule } from 'ngx-markdown';
import { SecurityContext } from '@angular/core';
import { ProjectSetupComponent } from './project-setup/project-setup.component';
import { DebugComponent } from './debug/debug.component';
import { ResourcesComponent } from './resources/resources.component';
import { CustomIconComponent } from './custom-icon/custom-icon.component';
import { SafePipeComponent } from './safe-pipe/safe-pipe.component';
import { MarkdownComponent } from './markdown/markdown.component';
import { UsefulPackagesComponent } from './useful-packages/useful-packages.component';
import { FontFamilyComponent } from './font-family/font-family.component';
import { TsNodeComponent } from './ts-node/ts-node.component';
import { GeoAutofillComponent } from './geo-autofill/geo-autofill.component';
import { MouseOverHtmlComponent } from './mouse-over-html/mouse-over-html.component';
import { CdkTooltipComponent } from './mouse-over-html/child-components/cdk-tooltip/cdk-tooltip.component';
import { PrintPdfComponent } from './print-pdf/print-pdf.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { ColorThemeComponent } from './color-theme/color-theme.component';
import { TimeStampComponent } from './time-stamp/time-stamp.component';
import { CalculatedFieldsComponent } from './calculated-fields/calculated-fields.component';
import { SalaryPipe } from './pipes/salary.pipe';
import { TestPipe } from './pipes/test.pipe';
import { LazyLoadingComponent } from './lazy-loading/lazy-loading.component';

@NgModule({
  declarations: [
    FrontEndComponent,
    ProjectSetupComponent,
    DebugComponent,
    ResourcesComponent,
    CustomIconComponent,
    SafePipeComponent,
    MarkdownComponent,
    UsefulPackagesComponent,
    FontFamilyComponent,
    TsNodeComponent,
    GeoAutofillComponent,
    MouseOverHtmlComponent,
    CdkTooltipComponent,
    PrintPdfComponent,
    CustomInputComponent,
    ColorThemeComponent,
    TimeStampComponent,
    CalculatedFieldsComponent,
    SalaryPipe,
    TestPipe,
    LazyLoadingComponent
  ],
  imports: [
    CommonModule,
    FrontEndRoutingModule,
    SharedModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE
    }),
    MarkdownModule.forChild()
  ]
})

export class FrontEndModule { }
