import {Component} from '@angular/core';
import {ActionSheetController, ActionSheet, NavController, NavParams, ToastController} from 'ionic-angular';
import {DealService} from '../../providers/deal-service-rest';

@Component({
    selector: 'page-deal-detail',
    templateUrl: 'deal-detail.html'
})
export class DealDetailPage {

    deal: any;

    constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, public DealService: DealService, public toastCtrl: ToastController) {
        this.deal = this.navParams.data;
        DealService.findById(this.deal.id).then(
            deal => this.deal = deal
        );
    }

    favorite(deal) {
        this.DealService.favorite(deal)
            .then(deal => {
                let toast = this.toastCtrl.create({
                    message: 'Deal added to your favorites',
                    cssClass: 'mytoast',
                    duration: 1000
                });
                toast.present(toast);
            });
    }

    share(deal) {
        let actionSheet: ActionSheet = this.actionSheetCtrl.create({
            title: 'Share via',
            buttons: [
                {
                    text: 'Twitter',
                    handler: () => { 
                        let toast = this.toastCtrl.create({
                        message: 'Shared via Twitter',
                        cssClass: 'mytoast',
                        duration: 2000
                        });
                        toast.present(toast);}
                },
                {
                    text: 'Facebook',
                    handler: () => { 
                        let toast = this.toastCtrl.create({
                        message: 'Shared via Facebook',
                        cssClass: 'mytoast',
                        duration: 2000
                        });
                        toast.present(toast);}
                },
                {
                    text: 'Email',
                    handler: () => { 
                        let toast = this.toastCtrl.create({
                        message: 'Shared via Email',
                        cssClass: 'mytoast',
                        duration: 2000
                        });
                        toast.present(toast);}
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => console.log('cancel share')
                }
            ]
        });
        actionSheet.present();
    }

}
