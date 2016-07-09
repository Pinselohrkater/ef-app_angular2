import {Component, Input, OnInit} from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import {ApiService, EventEntry, EventConferenceRoom, EventConferenceDay, Dealer} from '../api/api.service';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    selector: 'my-alldealers-viewer',
    templateUrl: 'app/viewers/alldealers-viewer.component.html',
    directives: [ROUTER_DIRECTIVES]
//   styleUrls: ['app/event-detail.component.css']
})

export class AllDealersViewerComponent implements OnInit {

    constructor(private _apiService:ApiService) {
    }

    dealers:Dealer[] = [];

    ngOnInit() {
        this.loadEntities();
        return;
    }

    loadEntities() {
        this._apiService.getDealers().then((data) => {
            this.dealers = data;
            this.dealers = this.dealers.sort((a: Dealer, b: Dealer) => {
                var aName: string = a.DisplayName != "" ? a.DisplayName : a.AttendeeNickname;
                var bName: string = b.DisplayName != "" ? b.DisplayName : b.AttendeeNickname;
                return aName.toLowerCase().localeCompare(bName.toLowerCase())
            })
        });
    }

}
