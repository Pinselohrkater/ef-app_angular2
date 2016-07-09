import { Component, Input, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import { ApiService, EventEntry, EventConferenceRoom, EventConferenceDay } from '../api/api.service';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'my-allevents-viewer',
  templateUrl: 'app/viewers/allevents-viewer.component.html',
  directives: [ROUTER_DIRECTIVES]
//   styleUrls: ['app/event-detail.component.css']
})

export class AllEventsViewerComponent implements OnInit {
    
    constructor(
        private _apiService: ApiService) {
    }
    
    eventEntries: EventEntry[] = [];
    eventConferenceDays: EventConferenceDay[] = [];
        
    ngOnInit() {
            this.loadEntities();
          return;

    }
    
    loadEntities(){
                
        this._apiService.getEventEntries().then(data => {
            this.eventEntries = data;
            
            this._apiService.getConferenceDays().then(data => {
                
                data = data.sort((a, b) => a.Date > b.Date ? 1 : -1);
                
                for(var c of data) {
                    c.EventEntries = [];
                    for (var e of this.eventEntries.sort((a,b) => a.StartTime > b.StartTime ? 1 : -1)) {
                        if (e.ConferenceDayId == c.Id) {
                            c.EventEntries.push(e);
                        }
                    }
                }
                
                this.eventConferenceDays = data;
            });
             
        });
    }
    
}