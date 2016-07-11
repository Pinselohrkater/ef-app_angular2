import {Component, Input, OnInit} from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import {
    ApiService, EventEntry, EventConferenceRoom, EventConferenceDay, Dealer, InfoGroup,
    Info
} from '../api/api.service';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    selector: 'my-allinfos-viewer',
    templateUrl: 'app/viewers/allinfos-viewer.component.html',
    directives: [ROUTER_DIRECTIVES]
//   styleUrls: ['app/event-detail.component.css']
})

export class AllInfosViewerComponent implements OnInit {

    constructor(private _apiService:ApiService) {
    }

    infoGroups:InfoGroup[] = [];
    infos:Info[] = [];

    ngOnInit() {
        this.loadEntities();
        return;
    }

    loadEntities() {
        // Get the infos
        this._apiService.getInfos().then(data => {
            this.infos = data;

            // Get the groups
            this._apiService.getInfoGroups().then(data => {
                this.infoGroups = data.sort((a:InfoGroup, b:InfoGroup) => {
                    return a.Position.localeCompare(b.Position);
                });
            });
        });

    }

}
