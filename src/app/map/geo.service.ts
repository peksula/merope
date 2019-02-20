import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

    getFeatures(): Observable<Geo[]> {
        return this.http.get<Geo[]>(this.featuresUrl);
    }

    getFeature(id: number): Observable<Geo> {
        const url = `${this.featuresUrl}/${id}`;
        return this.http.get<Geo>(url);
      }
}
