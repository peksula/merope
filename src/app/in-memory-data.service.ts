import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Feature } from 'geojson';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

    constructor() { }

    createDb() {
        return this.getFeatures();
    }

    private getFeatures() {
        const features: Feature[] = [{
            "type": "Feature",
            "properties": {
                "name": "Test",
                "amenity": "Test"
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[
                    [-109.05, 41.00],
                    [-102.06, 40.99],
                    [-102.03, 36.99],
                    [-109.04, 36.99],
                    [-109.05, 41.00]
                ]]
            }
        }];
        return {features};
    }
}

