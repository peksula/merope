import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer } from 'leaflet';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

    streetMaps = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        detectRetina: true,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    wMaps = tileLayer('http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
        detectRetina: true,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    mml = tileLayer('http://tiles.kartat.kapsi.fi/1.0.0/peruskartta/{z}/{x}/{y}.png', {
        detectRetina: true,
        attribution: '&copy; TBD'
    });

    options = {
        layers: [ this.streetMaps, this.wMaps ],
/*        layers: [
            tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
        ],*/
        zoom: 12,
        center: latLng(60.1699, 24.9384)
    };

  layersControl = {
    baseLayers: {
      'Street Maps': this.streetMaps,
      'Wikimedia Maps': this.wMaps,
      'Peruskartta': this.mml
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
