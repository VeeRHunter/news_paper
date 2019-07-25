import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FullPostDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-full-post-detail',
  templateUrl: 'full-post-detail.html',
})
export class FullPostDetailPage {

  public show_Data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FullPostDetailPage');
    this.show_Data = this.navParams.data.navParams;
    console.log(this.show_Data);
  }

}
