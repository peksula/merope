import { LayerIdentity } from './layer-identity';

export class MapLayerModel {

    /**
     * Constructor.
     *
     * @param baseLayers Array of map layers.
     * @param baseLayer Id of the active base layer.
     * @param overlayLayers Array of overlay layers.
     */
    constructor(public baseLayers: LayerIdentity[], public baseLayer: string, public overlayLayers: LayerIdentity[]){
    }
}