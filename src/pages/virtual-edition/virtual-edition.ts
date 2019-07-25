import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { ApiproviderProvider } from '../../providers/apiprovider/apiprovider';

import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';



/**
 * Generated class for the VirtualEditionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-virtual-edition',
  templateUrl: 'virtual-edition.html',
})
export class VirtualEditionPage {

  public show_news: any[];
  public total_news: any;

  public options: InAppBrowserOptions = {
    location: 'yes',//Or 'no' 
    hidden: 'no', //Or  'yes'
    clearcache: 'yes',
    clearsessioncache: 'yes',
    zoom: 'yes',//Android only ,shows browser zoom controls 
    hardwareback: 'yes',
    mediaPlaybackRequiresUserAction: 'no',
    shouldPauseOnSuspend: 'no', //Android only 
    closebuttoncaption: 'Close', //iOS only
    disallowoverscroll: 'no', //iOS only 
    toolbar: 'yes', //iOS only 
    enableViewportScale: 'no', //iOS only 
    allowInlineMediaPlayback: 'no',//iOS only 
    presentationstyle: 'pagesheet',//iOS only 
    fullscreen: 'yes',//Windows only    
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiprovider: ApiproviderProvider,
    public loadingCtrl: LoadingController, public toastCtrl: ToastController, public iab: InAppBrowser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VirtualEditionPage');
    this.ionicInit();
  }

  ionicInit() {

    this.show_news = new Array();

    let apiurl = "";
    apiurl = "https://dl.dropboxusercontent.com/s/xbv4ewkd6xacyy5/virtual.json";

    this.apiprovider.getData(apiurl).then((result) => {
      this.total_news = Object(result).virtual;
      console.log(this.total_news);
      for (let list of this.total_news) {
        let temp_list = list;
        this.show_news.push(temp_list);
      }
      console.log(this.show_news);
    }, (err) => {
      let toast = this.toastCtrl.create({
        message: "No Network",
        duration: 2000
      })
      toast.present();
    });

  }

  goto_link(value) {
    console.log(value);
    let target = "_blank";
    this.iab.create(this.show_news[value].link, "_blank", this.options);
  }

}
