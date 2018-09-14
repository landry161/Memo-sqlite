import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NouvellePage } from './nouvelle';

@NgModule({
  declarations: [
    NouvellePage,
  ],
  imports: [
    IonicPageModule.forChild(NouvellePage),
  ],
})
export class NouvellePageModule {}
