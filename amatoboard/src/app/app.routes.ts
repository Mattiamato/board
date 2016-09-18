import {provideRouter, RouterConfig} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {CalendarComponent} from "./calendar/calendar.component";
import {TramComponent} from "./tram/tram.component";

export const routes: RouterConfig = [
    { path: '', component: HomeComponent },
    { path: 'tram', component: TramComponent },
    { path: 'calendar', component: CalendarComponent },
    { path: 'about', component: AboutComponent }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
