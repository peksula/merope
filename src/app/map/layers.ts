import { tileLayer } from 'leaflet';
import { LayerIdentity } from './layer-identity';

export class Layers {

    static LAYER_OCM: LayerIdentity = {
        id: 'opencyclemap',
        name: 'Open Cycle Map',
        enabled: true,
        layer: tileLayer('http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', {
            maxZoom: 18,
            detectRetina: true,
            attribution: 'Open Cycle Map'
        })
    };

    static LAYER_OSM: LayerIdentity = {
        id: 'openstreetmap',
        name: 'Open Street Map',
        enabled: false,
        layer: tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            detectRetina: true,
            attribution: 'Open Street Map'
        })
    };

    static LAYER_MML: LayerIdentity = {
        id: 'mmlPeruskartta',
        name: 'MML Peruskartta',
        enabled: false,
        layer: tileLayer('http://tiles.kartat.kapsi.fi/1.0.0/peruskartta/{z}/{x}/{y}.png', {
            maxZoom: 18,
            detectRetina: true,
            attribution: 'MML Peruskartta'
        })
    };
}
