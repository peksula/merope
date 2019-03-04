import { Component, OnInit } from '@angular/core';
import { geoJSON, LatLng, MapOptions } from 'leaflet';
import { latLng } from 'leaflet';

import { MapLayers } from './map-layers';
import { MapLayerModel } from './map-layer-model';
import { GeoService } from '../core';
import { Feature } from 'geojson';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
    options: MapOptions;
    // layersControl: Control.Layers = <Control.Layers>{};
    layersControl: any;
    layers: L.Layer[];
    helsinki: LatLng = latLng(60.1699, 24.9384);
    layerModel = new MapLayerModel ([ MapLayers.LAYER_OSM, MapLayers.LAYER_OCM ], MapLayers.LAYER_OSM.id, [ ]);

    /**
    * Constructor.
    */
    constructor(private geoService: GeoService) {
        this.layersControl = {
            baseLayers: {
                'OpenStreetMap': MapLayers.LAYER_OSM.layer,
                'OpenCycleMap': MapLayers.LAYER_OCM.layer,
                'MML Peruskartta': MapLayers.LAYER_MML.layer
            },
            overlays: {
            }
        };

        this.layers = [];
        this.options = {
            zoom: 5,
            center: this.helsinki
        };

        this.apply();
    }

    /**
     * Angular OnInit life cycle hook.
     */
    ngOnInit() {
        
    }

    /**
     * Map ready hook.
     *
     * @param _event Map
     */
    initMap(_event: any) {
        this.getFeatures();
    }

    apply() {
        // Get the active base layer
        const baseLayer = this.layerModel.baseLayers.find((layer: any) => (layer.id === this.layerModel.baseLayer));

        // Get all the active overlay layers
        const newLayers = this.layerModel.overlayLayers
            .filter((l: any) => l.enabled)
            .map((l: any) => l.layer);
        newLayers.unshift(baseLayer.layer);
        this.layers = newLayers;
    }

    /**
     * Retrieves the geojson features from backend.
     */
    getFeatures(): void {
        this.geoService.getFeatures().subscribe(features => {
            features.forEach(feature => {
                this.layers.push(geoJSON(feature));
            });
            console.log('received ' + JSON.stringify(features));
        });
    }
}
