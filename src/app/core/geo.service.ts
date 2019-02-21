import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Geo } from './geo';

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
    getFeatures(): Observable<Geo[]> {
        return this.http.get<Geo[]>(this.featuresUrl);
    }

    /**
     * Gets a GeoJSON feature.
     *
     * @param id Id of the feature to get.
     */
    getFeature(id: number): Observable<Geo> {
        const url = `${this.featuresUrl}/${id}`;
        return this.http.get<Geo>(url);
    }
}
