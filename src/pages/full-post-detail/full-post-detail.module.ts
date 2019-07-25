import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FullPostDetailPage } from './full-post-detail';

@NgModule({
  declarations: [
    FullPostDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(FullPostDetailPage),
  ],
})
export class FullPostDetailPageModule {}
