import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConfigurationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-configuration',
  templateUrl: 'configuration.html',
})
export class ConfigurationPage {

  public charlotte: any;
  public tirad: any;
  public jacksonville: any;
  public estados: any;
  public inmigracion: any;
  public deportes: any;
  public farandula: any;
  public opinion: any;
  public salud: any;
  public latinoamerica: any;
  public mexico: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigurationPage');
    this.ionicInit();
  }

  set_toggle(value) {
    // alert("asdfasdasdf");
    switch (value) {
      case "charlotte":
        localStorage.setItem("charlotte", this.charlotte);
        break;
      case "tirad":
        localStorage.setItem("tirad", this.tirad);
        break;
      case "jacksonville":
        localStorage.setItem("jacksonville", this.jacksonville);
        break;
      case "estados":
        localStorage.setItem("estados", this.estados);
        break;
      case "inmigracion":
        localStorage.setItem("inmigracion", this.inmigracion);
        break;
      case "deportes":
        localStorage.setItem("deportes", this.deportes);
        break;
      case "farandula":
        localStorage.setItem("farandula", this.farandula);
        break;
      case "opinion":
        localStorage.setItem("opinion", this.opinion);
        break;
      case "salud":
        localStorage.setItem("salud", this.salud);
        break;
      case "latinoamerica":
        localStorage.setItem("latinoamerica", this.latinoamerica);
        break;
      case "mexico":
        localStorage.setItem("mexico", this.mexico);
        break;
    }
  }

  ionicInit() {
    if (localStorage.getItem("charlotte") == "true") {
      this.charlotte = true;
    } else {
      this.charlotte = false;
    }
    if (localStorage.getItem("tirad") == "true") {
      this.tirad = true;
    } else {
      this.tirad = false;
    }
    if (localStorage.getItem("jacksonville") == "true") {
      this.jacksonville = true;
    } else {
      this.jacksonville = false;
    }
    if (localStorage.getItem("estados") == "true") {
      this.estados = true;
    } else {
      this.estados = false;
    }
    if (localStorage.getItem("inmigracion") == "true") {
      this.inmigracion = true;
    } else {
      this.inmigracion = false;
    }
    if (localStorage.getItem("deportes") == "true") {
      this.deportes = true;
    } else {
      this.deportes = false;
    }
    if (localStorage.getItem("salud") == "true") {
      this.salud = true;
    } else {
      this.salud = false;
    }
    if (localStorage.getItem("latinoamerica") == "true") {
      this.latinoamerica = true;
    } else {
      this.latinoamerica = false;
    }
    if (localStorage.getItem("mexico") == "true") {
      this.mexico = true;
    } else {
      this.mexico = false;
    }
  }

}
