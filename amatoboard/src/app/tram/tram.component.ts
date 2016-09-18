import {Component} from '@angular/core';
import {Http, Response} from "@angular/http";
import {NgFor, NgClass} from "@angular/common";
import {Observable} from "rxjs/Rx";

@Component({
    selector: 'tram',
    templateUrl: './app/tram/tram.component.html',
    directives: [NgFor, NgClass]
})

export class TramComponent {

    tramRes: any;
    now: Date;

    constructor(http: Http){
        Observable.timer(0, 1000)
            .subscribe(t => this.now = new Date());
        let timer = Observable.timer(0, 3 * 60 * 1000);
        timer.subscribe(t => this.refreshData(http));
    }

    private refreshData(http: Http) {
        http.get('http://localhost:8000/web/api.php/v1/stationboard?id=008591325&limit=5')
            .map((data: Response) => data.json())
            .subscribe((json: any) => {
                this.tramRes = json;
                for(var i = 0; i < json.stationboard.length; i++) {
                    this.tramRes.stationboard[i].passList[0].arrival = new Date(json.stationboard[i].passList[0].arrival).getTime();
                }
            });
    }

    private calculateDifference(arrivalTime: number) {
        return Math.floor((arrivalTime - this.now.getTime()) / 60000);
    }
}
