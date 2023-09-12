import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiscellaneousRoutingModule } from './miscellaneous-routing.module';
import { MiscellaneousComponent } from './miscellaneous.component';
import { MarkdownModule } from 'ngx-markdown';
import { SecurityContext } from '@angular/core';
import { EmojiComponent } from './emoji/emoji.component';
import { DockerComponent } from './docker/docker.component';
import { PublishComponent } from './publish/publish.component';
import { SoftwareUpgradeComponent } from './software-upgrade/software-upgrade.component';
import { CreatePdfComponent } from './create-pdf/create-pdf.component';
import { PythonComponent } from './python/python.component';
import { SharedModule } from '../shared/shared.module';
import { RemoteDesktopComponent } from './remote-desktop/remote-desktop.component';

@NgModule({
  declarations: [
    MiscellaneousComponent,
    EmojiComponent,
    DockerComponent,
    PublishComponent,
    SoftwareUpgradeComponent,
    CreatePdfComponent,
    PythonComponent,
    RemoteDesktopComponent
  ],
  imports: [
    CommonModule,
    MiscellaneousRoutingModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE
    }),
    MarkdownModule.forChild(),
    SharedModule
  ]
})
export class MiscellaneousModule { }
