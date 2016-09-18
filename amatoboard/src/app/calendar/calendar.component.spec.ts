import {addProviders, inject} from '@angular/core/testing';

import {CalendarComponent} from './calendar.component';

describe('CalendarComponent', () => {
    beforeEach(() => addProviders([CalendarComponent]));

    it('should create the Calendar component', inject([CalendarComponent], (app: CalendarComponent) => {
        expect(app).toBeTruthy();
    }));
});
