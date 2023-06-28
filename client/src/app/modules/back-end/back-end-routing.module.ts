import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackEndComponent } from './back-end.component';
import { DebugComponent } from './debug/debug.component';
import { GeoAutofillComponent } from './geo-autofill/geo-autofill.component';
import { ProjectSetupComponent } from './project-setup/project-setup.component';
import { SavingArrayComponent } from './saving-array/saving-array.component';
import { TypescriptESMComponent } from './typescript-esm/typescript-esm.component';
import { UsefulPackagesComponent } from './useful-packages/useful-packages.component';
import { PdfGeneratorComponent } from './pdf-generator/pdf-generator.component';

const routes: Routes = [
  { path: '', component: BackEndComponent },
  { path: 'project-setup', component: ProjectSetupComponent },
  { path: 'useful-packages', component: UsefulPackagesComponent },
  { path: 'debug', component: DebugComponent },
  { path: 'saving-array', component: SavingArrayComponent },
  { path: 'geo-autofill', component: GeoAutofillComponent },
  { path: 'typescript-ESM', component: TypescriptESMComponent },
  { path: 'pdf-generator', component: PdfGeneratorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackEndRoutingModule { }
