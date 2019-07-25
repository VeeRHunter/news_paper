import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FullPostDetailPage } from '../pages/full-post-detail/full-post-detail';
import { CategoryViewPage } from '../pages/category-view/category-view';
import { LiveStreamPage } from '../pages/live-stream/live-stream';
import { VideoViewPage } from '../pages/video-view/video-view';
import { ConfigurationPage } from '../pages/configuration/configuration';
import { VirtualEditionPage } from '../pages/virtual-edition/virtual-edition';


import { ApiproviderProvider } from '../providers/apiprovider/apiprovider';
import { HttpModule } from '@angular/http';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { OneSignal } from '@ionic-native/onesignal';


// import { AdMobFree } from '@ionic-native/admob-free';    

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FullPostDetailPage,
    CategoryViewPage,
    LiveStreamPage,
    VideoViewPage,
    ConfigurationPage,
    VirtualEditionPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FullPostDetailPage,
    CategoryViewPage,
    LiveStreamPage,
    VideoViewPage,
    ConfigurationPage,
    VirtualEditionPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    OneSignal,
    // AdMobFree,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiproviderProvider
  ]
})
export class AppModule {}
