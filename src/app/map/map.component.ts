import { Component, OnInit } from '@angular/core';
import { Control, LatLng, Layer, TileLayer, MapOptions } from 'leaflet';
import { latLng, tileLayer } from 'leaflet';

import { Tile } from './tile';
import { TileService } from './tile.service';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

    streetMaps: TileLayer = <TileLayer>{};
    mmlMaps: TileLayer = <TileLayer>{};
    options: MapOptions;
    // layersControl: Control.Layers = <Control.Layers>{};
    layersControl: any;
    helsinki: LatLng = latLng(60.1699, 24.9384);
    tiles: Tile[] = [];

    /**
    * Constructor.
    */
    constructor(private tileService: TileService) {
        this.streetMaps = tileLayer(
            'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                detectRetina: true,
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }
        );
        this.mmlMaps = tileLayer(
            'http://tiles.kartat.kapsi.fi/1.0.0/peruskartta/{z}/{x}/{y}.png', {
                detectRetina: true,
                attribution: '&copy; TBD'// TODO!
            }
        );

        this.options = {
            layers: [ this.streetMaps, this.mmlMaps ],
            zoom: 15,
            center: this.helsinki
        };

        this.layersControl = {
            baseLayers: {
                'Street Maps': this.streetMaps,
                'MML peruskartta': this.mmlMaps
            }
        };

        this.getTiles();
    }

    /**
     * Angular OnInit life cycle hook.
     */
    ngOnInit() {
    }

    getTiles(): void {
        this.tileService.getTiles().subscribe(tiles => this.tiles = tiles);
    }
}
