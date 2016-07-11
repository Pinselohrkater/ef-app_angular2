import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService, EventEntry, EventConferenceRoom, Dealer, Image} from '../api/api.service';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {ImageUrlPipe} from '../pipes/ImageUrlPipe';
@Component({
    selector: 'my-dealer-viewer',
    templateUrl: 'app/viewers/dealer-viewer.component.html',
    directives: [ROUTER_DIRECTIVES],
    pipes: [ImageUrlPipe],
//   styleUrls: ['app/event-detail.component.css']
})

export class DealerViewerComponent implements OnInit {

    constructor(private _apiService:ApiService,
                private _routeParams:ActivatedRoute) {
    }

    id:string;

    dealer:Dealer = null;
    dealerPreviewImage:Image = null;
    artistPreviewImage: Image = null;

    ngOnInit() {
        this._routeParams.params
            .map(params => params['id'])
            .subscribe((id) => {

                this.loadEntity(id);

            });

        return;

    }

    loadEntity(id:string) {
        this.id = id;
        console.log(id);
        this._apiService.getDealer(this.id).then(data => {
            this.dealer = data;

            window.location.assign("eurofurence://dealer/" + this.dealer.Id);

            this._apiService.getImage(this.dealer.ArtistImageId).then(data => {
                this.dealerPreviewImage = data;
            });

            this._apiService.getImage(this.dealer.ArtPreviewImageId).then(data => {
                this.artistPreviewImage = data;
            });
        });
    }
}