import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Geo } from './geo';
import { TILES } from './mock-tiles';

@Injectable({
  providedIn: 'root'
})
export class GeoService {
    /**
     * Constructor.
     */
    constructor() {
    }

    getFeatures(): Observable<Geo[]> {
        return of(TILES);
    }
}
