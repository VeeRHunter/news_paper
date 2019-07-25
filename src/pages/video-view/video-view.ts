import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { ApiproviderProvider } from '../../providers/apiprovider/apiprovider';

import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the VideoViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video-view',
  templateUrl: 'video-view.html',
})
export class VideoViewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiprovider: ApiproviderProvider,
    public loadingCtrl: LoadingController, public toastCtrl: ToastController,
    public sanitizer: DomSanitizer) {
  }
  public show_news: any[];
  public total_news: any;

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoViewPage');
    this.ionicInit();
  }
  ionicInit() {

    this.show_news = new Array();

    let apiurl = "";
    let status = "";
    apiurl = "https://dl.dropboxusercontent.com/s/721vy10d20lx70n/holanewsvideos.json";
    status = "";

    this.apiprovider.getData(apiurl).then((result) => {
      console.log("this.show_news");
      this.total_news = Object(result).videos;
      for (let list of this.total_news) {
        let temp_list = list;
        temp_list.link = this.change_url(list.link);
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

  open_video(link) {
  }

  change_url(url) {
    let video_array = url.split("v=");
    let video_id = video_array[1];
    let return_videoId = "https://www.youtube.com/embed/" + video_id + "?playlist=" + video_id + "&loop=1&autoplay=1";
    // let return_videoId = "https://www.youtube.com/embed/" + video_id;
    return this.sanitizer.bypassSecurityTrustResourceUrl(return_videoId)
    // return return_videoId;
  }

}
