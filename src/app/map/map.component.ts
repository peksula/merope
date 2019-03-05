import { Component, OnInit } from '@angular/core';
import { geoJSON, LatLng, MapOptions } from 'leaflet';
import { latLng } from 'leaflet';

import { Layers } from './layers';
import { MapLayerModel } from './map-layer-model';
import { GeoService } from '../core';
import { Feature } from 'geojson';
import { LayerIdentity } from './layer-identity';

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
    layerModel = new MapLayerModel ([ Layers.LAYER_OSM, Layers.LAYER_OCM ], Layers.LAYER_OSM.id, [ ]);

    /**
    * Constructor.
    */
    constructor(private geoService: GeoService) {
        this.layersControl = {
            baseLayers: {
                'OpenStreetMap': Layers.LAYER_OSM.layer,
                'OpenCycleMap': Layers.LAYER_OCM.layer,
                'MML Peruskartta': Layers.LAYER_MML.layer
            },
            overlays: {
            }
        };

        this.layers = [];
        this.options = {
            zoom: 5,
            center: this.helsinki
        };

        this.applyLayers();
    }

    /**
     * Angular OnInit life cycle hook.
     */
    ngOnInit() {
        // Do nothing. Further construction deferred to initMap.
    }

    /**
     * Map ready hook.
     *
     * @param _event Event data.
     */
    initMap(_event: any) {
        this.getFeatures();
    }

    /**
     * Applies the selected layers on the map.
     */
    private applyLayers() {
        // Get the active base layer
        const baseLayer = this.layerModel.baseLayers.find((layer: LayerIdentity) => (layer.id === this.layerModel.activeBaseLayerId));

        // Get all the active overlay layers
        const newLayers = this.layerModel.overlayLayers
            .filter((layer: LayerIdentity) => layer.enabled)
            .map((layer: LayerIdentity) => layer.layer);
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
