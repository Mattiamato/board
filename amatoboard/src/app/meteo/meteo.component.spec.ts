import {addProviders, inject} from '@angular/core/testing';

import {MeteoComponent} from './meteo.component';

describe('MeteoComponent', () => {
    beforeEach(() => addProviders([MeteoComponent]));

    it('should create the Meteo component', inject([MeteoComponent], (app: MeteoComponent) => {
        expect(app).toBeTruthy();
    }));
});
