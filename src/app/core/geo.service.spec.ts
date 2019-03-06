import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Feature, Polygon, MultiPoint } from 'geojson';
import { GeoService } from './geo.service';

describe('GeoService', () => {
    let httpMock: HttpTestingController;
    let service: GeoService;
    const featuresUrl = 'api/features';

    const multiPoint: MultiPoint = {
        type: "MultiPoint",
        coordinates: [[100.0, 0.0], [101.0, 1.0]]
    };

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

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                GeoService
            ]
        });

        httpMock = TestBed.get(HttpTestingController);
        service = TestBed.get(GeoService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('getFeatures', () => {
        it('should fetch all the features and return them in an array', () => {
            service.getFeatures().subscribe(features => {
                expect(features.length).toBe(2);
                expect(features).toEqual(fakeFeatures);
            });
            const req = httpMock.expectOne(featuresUrl);
            expect(req.request.method).toBe(`GET`);
            req.flush(fakeFeatures);
        });

        it('should handle empty response', () => {
            service.getFeatures().subscribe(features => {
                expect(features).toEqual(<Feature[]>{});
            });
            const req = httpMock.expectOne(featuresUrl);
            expect(req.request.method).toBe(`GET`);
            req.flush('{}');
        });
    });

    describe('getFeature', () => {
        it('should fetch feature matching given id', () => {
            service.getFeature(1).subscribe(feature => {
                expect(feature).toEqual(featureWithPolygon);
            });
            const req = httpMock.expectOne(featuresUrl + '/1');
            expect(req.request.method).toBe(`GET`);
            req.flush(featureWithPolygon);
        });

        it('should handle empty response', () => {
            service.getFeature(1).subscribe(feature => {
                expect(feature).toEqual(<Feature>{});
            });
            const req = httpMock.expectOne(featuresUrl + '/1');
            expect(req.request.method).toBe(`GET`);
            req.flush('{}');
        });
    });
});
