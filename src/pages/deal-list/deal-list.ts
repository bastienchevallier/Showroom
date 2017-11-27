import {Component} from '@angular/core';
import {Config, NavController} from 'ionic-angular';
import {DealService} from '../../providers/deal-service-rest';
import {DealDetailPage} from '../deal-detail/deal-detail';
import {QrScannerPage} from '../qr-scanner/qr-scanner';
import leaflet from 'leaflet';

@Component({
    selector: 'page-deal-list',
    templateUrl: 'deal-list.html'
})

export class DealListPage {

    deals: Array<any>;
    dealsForSearch: Array<any>;
    searchKey: string = "";
    viewMode: string = "list";
    map = null;
    markersGroup;

    constructor(public navCtrl: NavController, public service: DealService, public config: Config) {
        this.findAll();
    }

    openDealDetail(deal: any) {
        this.navCtrl.push(DealDetailPage, deal);
    }

    openQrScanner() {
        this.navCtrl.push(QrScannerPage);
    }

    onInput(event) {
         // Reset items back to all of the items
        this.deals = this.dealsForSearch;

        // set val to the value of the searchbar
        let val = this.searchKey;

        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
          this.deals = this.deals.filter((deal) => {
            return (deal.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
          })
        }
    }

    onCancel(event) {
        this.findAll();
    }

    findAll() {
        this.service.findAll()
            .then(data => {
                    this.deals = data;
                    this.dealsForSearch = data;
            })
            .catch(error => alert(error));
    }



    dealMap() {
        setTimeout(() => {
            this.map = leaflet.map("map").setView([48.85, 2.35], 10);
            leaflet.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Tiles &copy; Esri'
            }).addTo(this.map);
            this.dealMarkers();
        })
    }


    dealMarkers() {
        if (this.markersGroup) {
            this.map.removeLayer(this.markersGroup);
        }
        this.markersGroup = leaflet.layerGroup([]);
        this.deals.forEach(deal => {
            // If the pro doesn't want his deal to be hidden
                if (deal.lat, deal.lng) {
                    let marker: any = leaflet.marker([deal.lat, deal.lng]).on('click', event => this.openDealDetail(event.target.data));
                    marker.data = deal;
                    this.markersGroup.addLayer(marker);
                }
        });
        this.map.addLayer(this.markersGroup);
    }

}
