import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {AppComponent} from './app.component';
import {APP_ROUTER_PROVIDERS} from './app.routes';
import {provide} from '@angular/core';
import { LocationStrategy, HashLocationStrategy }  from '@angular/common';

import { HTTP_PROVIDERS } from '@angular/http';

declare var ENV: string;

if (ENV === 'production') {
    enableProdMode();
}

bootstrap(AppComponent, [
    disableDeprecatedForms(),
    provideForms(),
    APP_ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass : HashLocationStrategy}),
    HTTP_PROVIDERS
]);
