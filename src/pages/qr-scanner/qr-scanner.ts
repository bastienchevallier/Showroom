import {Component} from '@angular/core';
import { NavController, ToastController} from 'ionic-angular';
import {DealDetailPage} from '../deal-detail/deal-detail';
import {DealListPage} from '../deal-list/deal-list';
import{BarcodeScanner} from '@ionic-native/barcode-scanner';
import {DealService} from '../../providers/deal-service-rest';

@Component({
    selector: 'page-qr-scanner',
    templateUrl: 'qr-scanner.html'
})

export class QrScannerPage {

	deals: any[] = [];
	selectedDeal: any;
	dealFound:boolean = false;
	map = null;
	markersGroup;
	

    constructor(public navCtrl: NavController, public toastCtrl: ToastController, private barcodeScanner: BarcodeScanner) {
    	this.scan();
    }

    openDealDetail(deal: any) {
        this.navCtrl.push(DealDetailPage, deal);
    }

    openDealList() {
        this.navCtrl.push(DealListPage);
    }

    scan() {
  		this.selectedDeal = {};
  		this.barcodeScanner.scan().then((barcodeData) => {
    		this.selectedDeal = this.deals.find(deal => deal.id === barcodeData.text);
    		if(this.selectedDeal !== undefined) {
      			this.dealFound = true;
      			{ 
                    let toast = this.toastCtrl.create({
                    message: 'Deal found',
                    cssClass: 'mytoast',
                    duration: 2000
                    });
                    toast.present(toast);}
                this.openDealDetail(this.selectedDeal);    
   			}else{
     	 		this.dealFound = false;
				{ 
                    let toast = this.toastCtrl.create({
                    message: 'Deal not found',
                    cssClass: 'mytoast',
                    duration: 2000
                    });
                    toast.present(toast);}
    		}
  		}, (err) => {
    		console.log('err')
  		});
	}

}
