import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownComponent } from './markdown/markdown.component';
import { CustomIconComponent } from './custom-icon/custom-icon.component';
import { DebugComponent } from './debug/debug.component';
import { FrontEndComponent } from './front-end.component';
import { ProjectSetupComponent } from './project-setup/project-setup.component';
import { SafePipeComponent } from './safe-pipe/safe-pipe.component';
import { UsefulPackagesComponent } from './useful-packages/useful-packages.component';
import { ResourcesComponent } from './resources/resources.component';
import { FontFamilyComponent } from './font-family/font-family.component';
import { TsNodeComponent } from './ts-node/ts-node.component';
import { GeoAutofillComponent } from './geo-autofill/geo-autofill.component';
import { MouseOverHtmlComponent } from './mouse-over-html/mouse-over-html.component';
import { PrintPdfComponent } from './print-pdf/print-pdf.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { ColorThemeComponent } from './color-theme/color-theme.component';
import { TimeStampComponent } from './time-stamp/time-stamp.component';
import { CalculatedFieldsComponent } from './calculated-fields/calculated-fields.component';
import { LazyLoadingComponent } from './lazy-loading/lazy-loading.component';
import { UIFreezeSpinnerComponent } from './ui-freeze-spinner/ui-freeze-spinner.component';

const routes: Routes = [
  { path: '', component: FrontEndComponent },
  { path: 'project-setup', component: ProjectSetupComponent },
  { path: 'ts-node', component: TsNodeComponent },
  { path: 'useful-packages', component: UsefulPackagesComponent },
  { path: 'debug', component: DebugComponent },
  { path: 'custom-icon', component: CustomIconComponent },
  { path: 'safe-pipe', component: SafePipeComponent },
  { path: 'markdown', component: MarkdownComponent },
  { path: 'font-family', component: FontFamilyComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'geo-autofill', component: GeoAutofillComponent },
  { path: 'mouse-over-html', component: MouseOverHtmlComponent },
  { path: 'print-pdf', component: PrintPdfComponent },
  { path: 'custom-input', component: CustomInputComponent },
  { path: 'color-theme', component: ColorThemeComponent },
  { path: 'time-stamp', component: TimeStampComponent },
  { path: 'calculated-fields', component: CalculatedFieldsComponent },
  { path: 'lazy-loading', component: LazyLoadingComponent },
  { path: 'ui-freeze-spinner', component: UIFreezeSpinnerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontEndRoutingModule { }
