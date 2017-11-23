import {Component} from '@angular/core';
import {ActionSheetController, ActionSheet, Config, NavController, NavParams, ToastController} from 'ionic-angular';
import {DealService} from '../../providers/deal-service-rest';
import {DealDetailPage} from '../deal-detail/deal-detail';
import{BarcodeScanner} from '@ionic-native/barcode-scanner';

@Component({
    selector: 'page-qr-scanner',
    templateUrl: 'qr-scanner.html'
})

export class QrScannerPage {

	linkedDeal : any;

    constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

    }

    openLinkedDealDetail(linkedDeal: any) {
        this.navCtrl.push(DealDetailPage, linkedDeal);
    }



}
