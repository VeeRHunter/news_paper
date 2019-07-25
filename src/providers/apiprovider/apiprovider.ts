import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


/*
  Generated class for the ApiproviderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiproviderProvider {

  constructor(public http: Http) {
    console.log('Hello PeopleproviderProvider Provider');
  }


  postData(apiurl, credentials) {
    // console.log(credentials);
    return new Promise((resolve, reject) => {
      let headers: Headers = new Headers();
      // headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      // headers.append('Access-Control-Allow-Origin', '*');
      // headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
      // headers.append('Access-Control-Allow-Headers', 'X-AMZ-META-TOKEN-ID, X-AMZ-META-TOKEN-SECRET');

      this.http.post(apiurl, credentials, { headers: headers }).subscribe(res => {
        resolve(res.json());
      }, (err) => {
        reject(err);
      });

    });
  }

  get_dataURLJSON(url) {
    console.log(this.http.get(url));
    // return new Promise((resolve, reject) => {
    //   this.http.get(url).subscribe(data => {

    //     console.log(data);

    //   });
    // });
  }


  getData(url) {
    return new Promise((resolve, reject) => {
      this.http.get(url)
        // .map((res) => res.json())
        .subscribe(res => {
          console.log("here");
          resolve(res.json());
        }, (rej) => { console.error("Could not load local data", rej) });
    });
  }
}
