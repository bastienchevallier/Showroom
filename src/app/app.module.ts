import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { MyApp } from './app.component';
import {WelcomePage} from '../pages/welcome/welcome';
import {DealListPage} from '../pages/deal-list/deal-list';
import {DealDetailPage} from '../pages/deal-detail/deal-detail';
import {FavoriteListPage} from '../pages/favorite-list/favorite-list';
import {AboutPage} from '../pages/about/about';
import {QrScannerPage} from '../pages/qr-scanner/qr-scanner';
import {DealService} from "../providers/deal-service-rest";


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    AboutPage,
    DealListPage,
    DealDetailPage,
    FavoriteListPage,
    QrScannerPage
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
    DealListPage,
    DealDetailPage,
    FavoriteListPage,
    QrScannerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DealService,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
