import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModiferNotePage } from './modifer-note';

@NgModule({
  declarations: [
    ModiferNotePage,
  ],
  imports: [
    IonicPageModule.forChild(ModiferNotePage),
  ],
})
export class ModiferNotePageModule {}
