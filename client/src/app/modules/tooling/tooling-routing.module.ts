import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GitComponent } from './git/git.component';
import { NvmComponent } from './nvm/nvm.component';
import { ToolingComponent } from './tooling.component';
import { VimComponent } from './vim/vim.component';
import { ExtensionsComponent } from './visual-studio-code/extensions/extensions.component';
import { FiraCodeComponent } from './visual-studio-code/fira-code/fira-code.component';
import { KeyboardShortcutsComponent } from './visual-studio-code/keyboard-shortcuts/keyboard-shortcuts.component';

const routes: Routes = [
  { path: '', component: ToolingComponent },
  { path: 'visual-studio-code/fira-code', component: FiraCodeComponent },
  { path: 'visual-studio-code/extensions', component: ExtensionsComponent },
  { path: 'visual-studio-code/keyboard-shortcuts', component: KeyboardShortcutsComponent },
  { path: 'nvm', component: NvmComponent },
  { path: 'vim', component: VimComponent },
  { path: 'git', component: GitComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolingRoutingModule { }
