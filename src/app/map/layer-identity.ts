import { Layer } from 'leaflet';

export interface LayerIdentity {
    id: string,
    name: string,
    enabled: boolean,
    layer: Layer
}
