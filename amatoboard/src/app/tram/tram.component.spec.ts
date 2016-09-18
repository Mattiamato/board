import {addProviders, inject} from '@angular/core/testing';

import {TramComponent} from './tram.component';

describe('TramComponent', () => {
    beforeEach(() => addProviders([TramComponent]));

    it('should create the Tram component', inject([TramComponent], (app: TramComponent) => {
        expect(app).toBeTruthy();
    }));
});
