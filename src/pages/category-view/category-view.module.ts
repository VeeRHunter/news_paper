import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoryViewPage } from './category-view';

@NgModule({
  declarations: [
    CategoryViewPage,
  ],
  imports: [
    IonicPageModule.forChild(CategoryViewPage),
  ],
})
export class CategoryViewPageModule {}
