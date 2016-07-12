import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';
import {CONSTANTS} from './shared';
import {ApiService} from './api/api.service';
import {LocalStorageService} from "./localStorage/LocalStorageEmitter";

@Component({
    selector: 'as-main-app',
    templateUrl: 'app/app.html',
    providers: [ApiService, LocalStorageService],
    directives: [NavbarComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {
    public appBrand: string;

    constructor(storageService: LocalStorageService) {
        this.appBrand = CONSTANTS.MAIN.APP.BRAND;
    }
}
