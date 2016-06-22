import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import * as _ from 'lodash';

@Injectable()
export class ApiService {
    
    _eventEntries: EventEntry[] = [];
    _eventConferenceDays: EventConferenceDay[] = [];
    _eventConferenceRooms: EventConferenceRoom[] = [];
    
    constructor (private _http: Http){
                
    }
    
    getEntities<T>(apiPath: string, store: T[]): Promise<T[]> {
        return new Promise<T[]>(resolve => {
            if (store.length > 0) {
                resolve(store);
            } else {
                this._http.get("https://app.eurofurence.org/api/" + apiPath)
                    .toPromise()
                    .then(this.extractData)
                    .then(entities => {
                        store.push(...entities);
                        resolve(store);                        
                    });
            }
        });        
    }
    
    
    getEventEntries() : Promise<EventEntry[]> {
        return this.getEntities("EventEntry", this._eventEntries);
    }    
    
    getConferenceDays() : Promise<EventConferenceDay[]> {
        return this.getEntities("EventConferenceDay", this._eventConferenceDays);
    }
    
    getConferenceRooms() : Promise<EventConferenceRoom[]> {
        return this.getEntities("EventConferenceRoom", this._eventConferenceRooms);
    }
    
    
    getEventEntry(id: string) : Promise<EventEntry> {
        return new Promise<EventEntry>(resolve => {
            this.getEventEntries().then(entities => {
                resolve(_.find(entities, {"Id": id}));
            });
        });
    }
    
    getEventConferenceRoom(id: string) : Promise<EventConferenceRoom> {
        return new Promise<EventConferenceRoom>(resolve => {
            this.getConferenceRooms().then(entities => {
                resolve(_.find(entities, {"Id": id}));
            });
        });
    }
    
    getEventConferenceDay(id: string) : Promise<EventConferenceDay> {
        return new Promise<EventConferenceDay>(resolve => {
            this.getConferenceDays().then(entities => {
                resolve(_.find(entities, {"Id": id}));
            });
        });
    }    
    
    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }   
}

export class EventEntry {
    Title: string;
    SubTitle: string;
    Id: string;  
    StartTime: string;
    EndTime: string;
    ConferenceRoomId: string;
    ConferenceDayId: string;
    ConferenceTrackId: string;
}

export class EventConferenceDay {
    Id: string;
    Name: string;
    Date: Date;

    EventEntries: EventEntry[] = [];
}

export class EventConferenceRoom {
    Id: string;
    Name: string;   
}