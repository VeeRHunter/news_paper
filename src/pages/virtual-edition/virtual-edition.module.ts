import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VirtualEditionPage } from './virtual-edition';

@NgModule({
  declarations: [
    VirtualEditionPage,
  ],
  imports: [
    IonicPageModule.forChild(VirtualEditionPage),
  ],
})
export class VirtualEditionPageModule {}
