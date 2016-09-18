import {bootstrap} from '@angular/platform-browser-dynamic';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {HTTP_PROVIDERS, Jsonp, ConnectionBackend} from '@angular/http';

import 'rxjs/Rx'; // importing RxJs operators like map

import {AppComponent} from './app.component';
import {APP_ROUTER_PROVIDERS } from './app.routes';
import {MeteoComponent} from './meteo/meteo.component';


bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS,
    disableDeprecatedForms(),
    provideForms(),
    HTTP_PROVIDERS
]).catch(err => console.error(err));

bootstrap(MeteoComponent, [HTTP_PROVIDERS]).catch(err => console.error(err));
