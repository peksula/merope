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
                "coordinates":[
                    [
                        [25.059814453125,60.18523283150749],
                        [25.0653076171875,60.18523283150749],
                        [25.0653076171875,60.182501529929304],
                        [25.059814453125,60.182501529929304]
                    ],
                    [
                        [25.059814453125,60.18523283150749],
                        [25.0653076171875,60.18523283150749],
                        [25.0653076171875,60.182501529929304],
                        [25.059814453125,60.182501529929304]
                    ],
                    [
                        [25.059814453125,60.18523283150749],
                        [25.0653076171875,60.18523283150749],
                        [25.0653076171875,60.182501529929304],
                        [25.059814453125,60.182501529929304]
                    ],
                    [
                        [25.4718017578125,60.99175939037398],
                        [25.477294921875,60.99175939037398],
                        [25.477294921875,60.98909544893918],
                        [25.4718017578125,60.98909544893918]
                    ]
                ]
            }
        }];
        return {features};
    }
}

