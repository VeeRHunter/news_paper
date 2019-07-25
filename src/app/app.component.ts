import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { FullPostDetailPage } from '../pages/full-post-detail/full-post-detail';
import { CategoryViewPage } from '../pages/category-view/category-view';
import { LiveStreamPage } from '../pages/live-stream/live-stream';
import { VideoViewPage } from '../pages/video-view/video-view';
import { ConfigurationPage } from '../pages/configuration/configuration';
import { VirtualEditionPage } from '../pages/virtual-edition/virtual-edition';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;
  @ViewChild(Nav) nav: Nav;

  public charlotte: any;
  public tirad: any;
  public jacksonville: any;
  public estados: any;
  public inmigracion: any;
  public farandula: any;
  public opinion: any;
  public salud: any;
  public deportes: any;
  public latinoamerica: any;
  public mexico: any;

  public local: boolean;
  public nacional: boolean;
  public category: boolean;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      localStorage.setItem("page_state", "HomePage");
      this.rootPage = HomePage;
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.ionViewDidLoad();
  }

  ionViewDidLoad() {
    this.ionicInit();
    setTimeout(() => {
      this.ionViewDidLoad();
    }, 500);
  }

  goto_page(value) {

    switch (value) {
      case 0:
        localStorage.setItem("page_state", "0");
        // this.nav.pop();
        this.rootPage = HomePage;
        break;
      case 12:
        localStorage.setItem("page_state", value);
        // this.nav.pop();
        this.rootPage = VideoViewPage;
        break;
      case 20:
        localStorage.setItem("page_state", value);
        this.rootPage = ConfigurationPage;
        // this.nav.pop();
        break;
      case 21:
        localStorage.setItem('page_state', value);
        this.rootPage = VirtualEditionPage;
        break;
      default:
        let param = localStorage.getItem("page_state");
        if (parseInt(param) > 0 && parseInt(param) < 12) {
          localStorage.setItem("page_state", value);
          this.nav.pop();
          this.nav.push(CategoryViewPage);
        } else {
          localStorage.setItem("page_state", value);
          this.nav.push(CategoryViewPage);
        }
        break;
    }
  }

  ionicInit() {
    this.charlotte = localStorage.getItem("charlotte");
    this.tirad = localStorage.getItem("tirad");
    this.jacksonville = localStorage.getItem("jacksonville");
    this.estados = localStorage.getItem("estados");
    this.inmigracion = localStorage.getItem("inmigracion");
    this.farandula = localStorage.getItem("farandula");
    this.opinion = localStorage.getItem("opinion");
    this.salud = localStorage.getItem("salud");
    this.deportes = localStorage.getItem("deportes");
    this.latinoamerica = localStorage.getItem("latinoamerica");
    this.mexico = localStorage.getItem("mexico");

    if (this.charlotte == "true" || this.tirad == "true" || this.jacksonville == "true") {
      this.local = true;
    } else {
      this.local = false;
    }
    if (this.estados == "true" || this.inmigracion == "true") {
      this.nacional = true;
    } else {
      this.nacional = false;
    }
    if (this.farandula == "true" || this.opinion == "true" || this.salud == "true" || this.deportes == "true" || this.latinoamerica == "true" || this.mexico == "true") {
      this.category = true;
    } else {
      this.category = false;
    }
  }
}

