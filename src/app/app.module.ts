import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import {WelcomePage} from '../pages/welcome/welcome';
import {ShowListPage} from '../pages/show-list/show-list';
import {ShowDetailPage} from '../pages/show-detail/show-detail';
import {FavoriteListPage} from '../pages/favorite-list/favorite-list';
import {AboutPage} from '../pages/about/about';
<<<<<<< HEAD
import {QrScannerPage} from '../pages/qr-scanner/qr-scanner';
import {DealService} from "../providers/deal-service-rest";
=======

import {ShowService} from "../providers/show-service-rest";
>>>>>>> parent of 9fa222c6... v0 front that is working

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    AboutPage,
<<<<<<< HEAD
    DealListPage,
    DealDetailPage,
    FavoriteListPage,
    QrScannerPage
=======
    ShowListPage,
    ShowDetailPage,
    FavoriteListPage
>>>>>>> parent of 9fa222c6... v0 front that is working
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    AboutPage,
<<<<<<< HEAD
    DealListPage,
    DealDetailPage,
    FavoriteListPage,
    QrScannerPage
=======
    ShowListPage,
    ShowDetailPage,
    FavoriteListPage
>>>>>>> parent of 9fa222c6... v0 front that is working
  ],
  providers: [
    StatusBar,
    SplashScreen,
<<<<<<< HEAD
    DealService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
=======
    ShowService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
>>>>>>> parent of 9fa222c6... v0 front that is working
  ]
})
export class AppModule {}
