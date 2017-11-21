import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {DealService} from '../../providers/deal-service-rest';
import {DealDetailPage} from '../deal-detail/deal-detail';

@Component({
    selector: 'page-favorite-list',
    templateUrl: 'favorite-list.html'
})
export class FavoriteListPage {

    favorites: Array<any>;

    constructor(public navCtrl: NavController, public service: DealService) {
        this.getFavorites();
    }

    itemTapped(favorite) {
        this.navCtrl.push(DealDetailPage, favorite.deal);
    }

    deleteItem(favorite) {
        this.service.unfavorite(favorite)
            .then(() => {
                this.getFavorites();
            })
            .catch(error => alert(JSON.stringify(error)));
    }

    getFavorites() {
        this.service.getFavorites()
            .then(data => this.favorites = data);
    }

}
