import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {MeteoComponent} from "./meteo/meteo.component";
import {TramComponent} from "./tram/tram.component";
import {NgFor} from "@angular/common";
import {Observable} from "rxjs/Rx";

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    directives: [ROUTER_DIRECTIVES, NgFor],
    precompile: [HomeComponent, AboutComponent, MeteoComponent, TramComponent]
})

export class AppComponent {
    now: Date;

    constructor(){
        Observable.timer(0, 1000)
            .subscribe(t => this.now = new Date());
    }
}
