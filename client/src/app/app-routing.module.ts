import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HelpComponent } from './components/help/help.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'help', component: HelpComponent },
  { path: 'post', loadChildren: () => import('./modules/post/post.module').then(m => m.PostModule) },
  { path: 'front-end', loadChildren: () => import('./modules/front-end/front-end.module').then(m => m.FrontEndModule) },
  { path: 'back-end', loadChildren: () => import('./modules/back-end/back-end.module').then(m => m.BackEndModule) },
  { path: 'tooling', loadChildren: () => import('./modules/tooling/tooling.module').then(m => m.ToolingModule) },
  { path: 'documentation', loadChildren: () => import('./modules/documentation/documentation.module').then(m => m.DocumentationModule) },
  { path: 'overview', loadChildren: () => import('./modules/overview/overview.module').then(m => m.OverviewModule) },
  { path: 'database', loadChildren: () => import('./modules/database/database.module').then(m => m.DatabaseModule) },
  { path: 'miscellaneous', loadChildren: () => import('./modules/miscellaneous/miscellaneous.module').then(m => m.MiscellaneousModule) },
  { path: 'deployment', loadChildren: () => import('./modules/deployment/deployment.module').then(m => m.DeploymentModule) },
  { path: 'coding', loadChildren: () => import('./modules/coding/coding.module').then(m => m.CodingModule) },
  { path: 'design-patterns', loadChildren: () => import('./modules/design-patterns/design-patterns.module').then(m => m.DesignPatternsModule) },
  { path: 'technical-documentation', loadChildren: () => import('./modules/technical-documentation/technical-documentation.module').then(m => m.TechnicalDocumentationModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
