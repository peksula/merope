import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer, TileLayer } from 'leaflet';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

    streetMaps: TileLayer = null;
    mmlMaps: TileLayer = null;
    options: any; // TBD typing
    layersControl: any; // TBD

    /**
    * Constructor.
    */
    constructor() {
        this.streetMaps = tileLayer(
            'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                detectRetina: true,
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }
        );
        this.mmlMaps = tileLayer(
            'http://tiles.kartat.kapsi.fi/1.0.0/peruskartta/{z}/{x}/{y}.png', {
                detectRetina: true,
                attribution: '&copy; TBD'
            }
        );

        this.options = {
            layers: [ this.streetMaps, this.mmlMaps ],
            zoom: 14,
            center: latLng(60.1699, 24.9384)
        };

        this.layersControl = {
            baseLayers: {
                'Street Maps': this.streetMaps,
                'MML peruskartta': this.mmlMaps
            }
        };
    }

    /**
     * Angular OnInit life cycle hook.
     */
    ngOnInit() {
    }

}
