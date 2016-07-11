import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService, EventEntry, EventConferenceRoom, Dealer, Image, Info} from '../api/api.service';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {ImageUrlPipe} from '../pipes/ImageUrlPipe';
@Component({
    selector: 'my-info-viewer',
    templateUrl: 'app/viewers/info-viewer.component.html',
    directives: [ROUTER_DIRECTIVES],
    pipes: [ImageUrlPipe],
//   styleUrls: ['app/event-detail.component.css']
})

export class InfoViewerComponent implements OnInit {

    constructor(private _apiService:ApiService,
                private _routeParams:ActivatedRoute) {
    }

    id:string;

    info: Info = null;
    
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

        this._apiService.getInfo(id).then(data =>{
            this.info = data;

            location.assign("eurofurence://info/" + this.id);
        });
    }
}