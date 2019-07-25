import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { ApiproviderProvider } from '../../providers/apiprovider/apiprovider';
import { FullPostDetailPage } from '../full-post-detail/full-post-detail';

/**
 * Generated class for the CategoryViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category-view',
  templateUrl: 'category-view.html',
})
export class CategoryViewPage {

  public top_news1 = { "title": "", "title_description": "", "image": "", "date": "", "content": "" };
  public top_news2 = { "title": "", "title_description": "", "image": "", "date": "", "content": "" };
  public top_news3: any;

  public show_news: any[];

  public total_news: any;
  public category_name: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiprovider: ApiproviderProvider,
    public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryViewPage');
    this.ionicInit();
  }

  ionicInit() {

    this.show_news = new Array();

    let pate_state = localStorage.getItem("page_state");

    let apiurl = "";
    let status = "";

    switch (pate_state) {
      case "1":
        apiurl = "https://holanews.com/category/noticias-locales/charlotte/";
        status = "json=get_posts&count=20&status=published";
        this.category_name = "Charlotte, North Carolina";
        break;
      case "2":
        apiurl = "https://holanews.com/category/noticias-locales/triad/";
        status = "json=get_posts&count=20&status=published";
        this.category_name = "Triad, North Carolina";
        break;
      case "3":
        apiurl = "https://holanews.com/category/noticias-locales/jacksonville/";
        status = "json=get_posts&count=20&status=published";
        this.category_name = "Jacksonville";
        break;
      case "4":
        apiurl = "https://holanews.com/category/estados-unidos/";
        status = "json=get_posts&count=20&status=published";
        this.category_name = "Estados Unidos";
        break;
      case "5":
        apiurl = "https://holanews.com/category/inmigracion/";
        status = "json=get_posts&count=20&status=published";
        this.category_name = "Inmigracion";
        break;
      case "6":
        apiurl = "https://holanews.com/category/farandula/";
        status = "json=get_posts&count=20&status=published";
        this.category_name = "Farandula";
        break;
      case "7":
        apiurl = "https://holanews.com/category/opinion/";
        status = "json=get_posts&count=10&status=published";
        this.category_name = "Opinion";
        break;
      case "8":
        apiurl = "https://holanews.com/category/salud/";
        status = "json=get_posts&count=10&status=published";
        this.category_name = "Salud";
        break;
      case "9":
        apiurl = "https://holanews.com/category/deportes/";
        status = "json=get_posts&count=20&status=published";
        this.category_name = "Deportes";
        break;
      case "10":
        apiurl = "https://holanews.com/category/latinoamerica/";
        status = "json=get_posts&count=20&status=published";
        this.category_name = "Latinoamerica";
        break;
      case "11":
        apiurl = "https://holanews.com/category/mexico/";
        status = "json=get_posts&count=20&status=published";
        this.category_name = "Mexico";
        break;
      default:
        break;
    }

    console.log(apiurl);
    console.log(status);

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
            temp_news.image = list.thumbnail_images.medium_large.url;
            temp_news.content = list.content;
            temp_news.date = this.make_date(list.date);
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
    console.log(this.top_news1);
    this.navCtrl.push(FullPostDetailPage, { navParams: this.top_news1 });
  }

  goto_fullPosts(value) {
    console.log(this.show_news[value]);
    this.navCtrl.push(FullPostDetailPage, { navParams: this.show_news[value] });
  }

}
