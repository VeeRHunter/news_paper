import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController, NavParams } from 'ionic-angular';
import { ApiproviderProvider } from '../../providers/apiprovider/apiprovider';
import { FullPostDetailPage } from '../full-post-detail/full-post-detail';
import { LiveStreamPage } from '../live-stream/live-stream';

import { OneSignal } from '@ionic-native/onesignal';



// import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public top_news1 = { "title": "", "title_description": "", "image": "", "date": "", "content": "" };
  public top_news2 = { "title": "", "title_description": "", "image": "", "date": "", "content": "" };
  public top_news3: any;

  public show_news: any[];

  public total_news: any;

  constructor(public navCtrl: NavController, public apiprovider: ApiproviderProvider,
    public loadingCtrl: LoadingController, public toastCtrl: ToastController, public navParams: NavParams,
    public oneSignal: OneSignal) {
  }

  ionViewDidLoad() {

    this.ionicInit();
    this.open_notification();
  }

  init_admob() {

    // const bannerConfig: AdMobFreeBannerConfig = {
    //   // add your config here
    //   // for the sake of this example we will just use the test config
    //   isTesting: true,
    //   autoShow: true
    // };
    // this.admobFree.banner.config(bannerConfig);

    // this.admobFree.banner.prepare()
    //   .then(() => {
    //     // banner Ad is ready
    //     // if we set autoShow to false, then we will need to call the show method here
    //   })
    //   .catch(e => console.log(e));
  }

  ionicInit() {

    this.show_news = new Array();

    let pate_state = localStorage.getItem("page_state");

    let apiurl = "";
    let status = "";
    apiurl = "https://holanews.com/api/get_recent_posts/";
    status = "json=get_posts&count=20&status=published";

    console.log(apiurl);

    let loading = this.loadingCtrl.create({
      content: "Please Wait..."
    });
    loading.present();
    this.apiprovider.postData(apiurl, status).then((result) => {
      loading.dismiss();
      if (Object(result).status == "ok") {

        this.total_news = Object(result).posts;

        this.top_news1.title = this.total_news[0].title;
        this.top_news1.title_description = this.total_news[0].title_plain;
        this.top_news1.content = this.total_news[0].content;
        this.top_news1.date = this.total_news[0].date;
        this.top_news1.image = this.total_news[0].thumbnail_images.medium_large.url;

        console.log(this.top_news1);

        for (let list of this.total_news) {
          if (list.title == this.top_news1.title) {
          } else {
            let temp_news = { "title": "", "title_description": "", "image": "", "date": "", "content": "" };
            temp_news.title = list.title;
            temp_news.title_description = list.title_plain;
            temp_news.content = list.content;
            temp_news.date = this.make_date(list.date);
            temp_news.image = list.thumbnail_images.medium_large.url;
            this.show_news.push(temp_news);
          }
        }

        console.log(this.total_news);

      } else {
        let toast = this.toastCtrl.create({
          message: "Invalid Username or Password",
          duration: 2000
        })
        toast.present();
      };

    }, (err) => {
      let toast = this.toastCtrl.create({
        message: "No Network",
        duration: 2000
      })
      toast.present();
      loading.dismiss();
    });
  }

  make_date(date) {
    let date_str = date;
    let today_date = new Date().toLocaleDateString();
    console.log("today date   =>  " + this.change_dateToSting(today_date));
    let array_date = date_str.split(" ");
    if (array_date[0] == this.change_dateToSting(today_date)) {
      date = "Today:" + array_date[1];
    }
    return date;
  }

  change_dateToSting(date) {
    let string = date;
    let array = string.split("/");
    string = array[2] + this.add_zeroToDate(array[0]) + this.add_zeroToDate(array[1]);
    return string;
  }

  add_zeroToDate(value) {
    if (parseInt(value) < 10) {
      value = "0" + value;
    }
    return value;
  }

  goto_fullPost() {
    this.navCtrl.push(FullPostDetailPage, { navParams: this.top_news1 });
  }

  goto_fullPosts(value) {
    this.navCtrl.push(FullPostDetailPage, { navParams: this.show_news[value] });
  }


  open_notification() {

    // this.oneSignal.startInit('b6ed3843-fb35-43d7-9f0c-db1cf8111ea2', '455927859482');


    this.oneSignal.startInit('a033468e-d592-4eb4-b2df-fc67197824f4', '455927859482');

    this.oneSignal.enableSound(true);
    this.oneSignal.enableVibrate(true);

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    this.oneSignal.handleNotificationReceived().subscribe(() => {
      // do something when notification is received
      console.log("thaoisufhoaisduhfoaisudfhoaiusdhfaida");
    });

    this.oneSignal.handleNotificationOpened().subscribe(() => {
      // do something when a notification is opened
      console.log("Just after Onesignal notification");
    });

    this.oneSignal.endInit();

  }

  goto_stream() {
    this.navCtrl.push(LiveStreamPage);
  }

}
