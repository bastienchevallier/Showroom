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

	scanDeal: any;
  deal : any;
	

    constructor(public navCtrl: NavController, public toastCtrl: ToastController, private barcodeScanner: BarcodeScanner, public DealService: DealService) {
    	this.scan();
    }

    openDealDetail(deal: any) {
        this.navCtrl.push(DealDetailPage, deal);
    }

    openDealList() {
        this.navCtrl.push(DealListPage);
    }

    scan() {
    		this.barcodeScanner.scan().then((barcodeData) => {
      		this.scanDeal.id == barcodeData.text;
          this.DealService.findById(this.scanDeal.id).then( 
              deal => this.deal = deal
          );
          this.openDealDetail(this.deal);
          if (this.deal !== undefined ){
              { // "Stuff worked!"
                let toast = this.toastCtrl.create({
                message: 'Deal found',
                cssClass: 'mytoast',
                duration: 2000
                });
                toast.present(toast);} 
               
          }              
          else{
              let toast = this.toastCtrl.create({
              message: 'Deal not found',
              cssClass: 'mytoast',
              duration: 2000
              });
              toast.present(toast); // Error: "It broke"
          }
    		}, (err) => {
      		console.log('err')
    		});

	}

}
