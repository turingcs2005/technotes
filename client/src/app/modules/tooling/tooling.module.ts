import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolingRoutingModule } from './tooling-routing.module';
import { ToolingComponent } from './tooling.component';
import { MarkdownModule } from 'ngx-markdown';
import { SecurityContext } from '@angular/core';
import { NvmComponent } from './nvm/nvm.component';
import { FiraCodeComponent } from './visual-studio-code/fira-code/fira-code.component';
import { ExtensionsComponent } from './visual-studio-code/extensions/extensions.component';
import { KeyboardShortcutsComponent } from './visual-studio-code/keyboard-shortcuts/keyboard-shortcuts.component';
import { VimComponent } from './vim/vim.component';
import { GitComponent } from './git/git.component';

@NgModule({
  declarations: [
    ToolingComponent,
    NvmComponent,
    FiraCodeComponent,
    ExtensionsComponent,
    KeyboardShortcutsComponent,
    VimComponent,
    GitComponent
  ],
  imports: [
    CommonModule,
    ToolingRoutingModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE
    }),
    MarkdownModule.forChild()
  ]
})
export class ToolingModule { }
