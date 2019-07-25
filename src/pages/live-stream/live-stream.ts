import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LiveStreamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-live-stream',
  templateUrl: 'live-stream.html',
})
export class LiveStreamPage {

  public visit_state: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LiveStreamPage');
    // this.visit_state = true;

    if (localStorage.getItem("page_state") == "1") {
      this.visit_state = true;
    } else {
      this.visit_state = false;
    }


  }

}
