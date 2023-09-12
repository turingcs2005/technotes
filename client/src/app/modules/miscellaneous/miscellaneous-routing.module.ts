import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DockerComponent } from './docker/docker.component';
import { EmojiComponent } from './emoji/emoji.component';
import { MiscellaneousComponent } from './miscellaneous.component';
import { PublishComponent } from './publish/publish.component';
import { SoftwareUpgradeComponent } from './software-upgrade/software-upgrade.component';
import { CreatePdfComponent } from './create-pdf/create-pdf.component';
import { PythonComponent } from './python/python.component';
import { RemoteDesktopComponent } from './remote-desktop/remote-desktop.component';

const routes: Routes = [
  { path: '', component: MiscellaneousComponent },
  { path: 'emoji', component: EmojiComponent },
  { path: 'docker', component: DockerComponent },
  { path: 'publish', component: PublishComponent },
  { path: 'software-upgrade', component: SoftwareUpgradeComponent },
  { path: 'create-pdf', component: CreatePdfComponent },
  { path: 'python', component: PythonComponent },
  { path: 'remote-desktop', component: RemoteDesktopComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MiscellaneousRoutingModule { }
