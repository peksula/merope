import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LatLng } from 'leaflet';
import { Feature, Polygon, MultiPoint } from 'geojson';
import { latLng } from 'leaflet';

import { MapComponent } from './map.component';
import { GeoService } from '../core/geo.service';

describe('MapComponent', () => {
    let component: MapComponent;
    let httpMock: HttpTestingController;
    let fixture: ComponentFixture<MapComponent>;
    const endpoint = 'api/features';

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                MapComponent
            ],
            imports: [
                HttpClientTestingModule,
                LeafletModule
            ],
            providers: [
                GeoService
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MapComponent);
        component = fixture.componentInstance;
        httpMock = TestBed.get(HttpTestingController);
        fixture.detectChanges();
    });

    afterEach(() => {
        // Ensure no outstanding requests
        httpMock.verify();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
        const req = httpMock.expectOne(endpoint);
        expect(req.request.method).toBe(`GET`);
        req.flush([]);

    });

    it('is initially centered to Helsinki', () => {
        const helsinki: LatLng = latLng(60.1699, 24.9384);
        expect(component.options.center).toEqual(helsinki);
        const req = httpMock.expectOne(endpoint);
        expect(req.request.method).toBe(`GET`);
        req.flush([]);
    });

    it('initially contains one layer', () => {
        expect(component.layers.length).toEqual(1);
        const req = httpMock.expectOne(endpoint);
        expect(req.request.method).toBe(`GET`);
        req.flush([]);
    });

    it('should add retrieved features as layers', () => {

        const featureWithPolygon: Feature<Polygon> = {
            type: "Feature",
            bbox: [-180.0, -90.0, 180.0, 90.0],
            geometry: {
                type: "Polygon",
                coordinates: [
                    [[-180.0, 10.0], [20.0, 90.0], [180.0, -5.0], [-30.0, -90.0]]
                ]
            },
            properties: null
        };

        const multiPoint: MultiPoint = {
            type: "MultiPoint",
            coordinates: [[100.0, 0.0], [101.0, 1.0]]
        };

        const featureWithMultiPoint: Feature<MultiPoint> = {
            type: "Feature",
            bbox: [-180.0, -90.0, 180.0, 90.0],
            geometry: multiPoint,
            properties: null
        };

        const fakeFeatures: Feature[] = [
            featureWithMultiPoint,
            featureWithPolygon 
        ];

        const req = httpMock.expectOne(endpoint);
        expect(req.request.method).toBe(`GET`);
        req.flush(fakeFeatures);
        expect(component.layers.length).toEqual(3);
    });

});
