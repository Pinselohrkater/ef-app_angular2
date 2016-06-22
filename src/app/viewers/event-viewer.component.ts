import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService, EventEntry, EventConferenceRoom } from '../api/api.service';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'my-event-viewer',
  templateUrl: 'app/viewers/event-viewer.component.html',
  directives: [ROUTER_DIRECTIVES]
//   styleUrls: ['app/event-detail.component.css']
})

export class EventViewerComponent implements OnInit {
    
    constructor(
        private _apiService: ApiService,
        private _routeParams: ActivatedRoute) {
    }
    
    eventEntry: EventEntry = null;
    eventConferenceRoom: EventConferenceRoom = null;
    eventConferenceDay: any = null;
    
    id: string;
        
    ngOnInit() {
        this._routeParams.params
            .map(params => params['id'])
            .subscribe((id) => {
                
                this.loadEntity(id);
                
          });
          
          return;

    }
    
    loadEntity(id: string){
        this.id = id;
                
        this._apiService.getEventEntry(this.id).then(data => {
            this.eventEntry = data;
            
            this._apiService.getEventConferenceRoom(this.eventEntry.ConferenceRoomId)
                .then(data => { this.eventConferenceRoom = data; });
                
            this._apiService.getEventConferenceDay(this.eventEntry.ConferenceDayId)
                .then(data => { this.eventConferenceDay = data; });      
        });
    }
    
}