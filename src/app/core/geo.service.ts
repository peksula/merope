import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Feature } from 'geojson';

@Injectable({
  providedIn: 'root'
})
export class GeoService {

    private featuresUrl = 'api/features';

    /**
     * Constructor.
     */
    constructor(private http: HttpClient) {
    }

    /**
     * Gets GeoJSON features.
     */
    getFeatures(): Observable<Feature[]> {
        return this.http.get<Feature[]>(this.featuresUrl);
    }

    /**
     * Gets a GeoJSON feature.
     *
     * @param id Id of the feature to get.
     */
    getFeature(id: number): Observable<Feature> {
        const url = `${this.featuresUrl}/${id}`;
        return this.http.get<Feature>(url);
    }
}
