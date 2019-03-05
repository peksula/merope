import { LayerIdentity } from './layer-identity';

export class MapLayerModel {

    /**
     * Constructor.
     *
     * @param baseLayers Array of map layers.
     * @param activeBaseLayerId Id of the active base layer.
     * @param overlayLayers Array of overlay layers.
     */
    constructor(public baseLayers: LayerIdentity[], public activeBaseLayerId: string, public overlayLayers: LayerIdentity[]){
    }
}