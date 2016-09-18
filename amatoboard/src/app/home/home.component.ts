import {Component} from '@angular/core';
import {CalendarComponent} from "../calendar/calendar.component";
import {TramComponent} from "../tram/tram.component";
import {Response} from "@angular/http";

@Component({
    selector: 'home',
    templateUrl: './app/home/home.component.html',
    directives: [CalendarComponent, TramComponent],
    precompile: [CalendarComponent, TramComponent]
})

export class HomeComponent {
}
