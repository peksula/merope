import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Geo } from './geo';
import { GeoService } from './geo.service';

describe('GeoService', () => {
    let httpMock: HttpTestingController;
    let service: GeoService;
    const featuresUrl = 'api/features';
    const fakeFeatures: Geo[] = [
        { id: 0, name: 'A' },
        { id: 1, name: 'B' }
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
                expect(features.length).toBe(3);
                expect(features).toEqual(fakeFeatures);
            });
            const req = httpMock.expectOne(featuresUrl);
            expect(req.request.method).toBe(`GET`);
            req.flush(fakeFeatures);
        });

        it('should handle empty response', () => {
            service.getFeatures().subscribe(features => {
                expect(features).toEqual(<Geo[]>{});
            });
            const req = httpMock.expectOne(featuresUrl);
            expect(req.request.method).toBe(`GET`);
            req.flush('{}');
        });
    });

    describe('getFeature', () => {
        it('should fetch feature matching given id', () => {
            service.getFeature(1).subscribe(feature => {
                expect(feature).toEqual(fakeFeatures[1]);
            });
            const req = httpMock.expectOne(featuresUrl + '/1');
            expect(req.request.method).toBe(`GET`);
            req.flush(fakeFeatures);
        });

        it('should handle empty response', () => {
            service.getFeature(1).subscribe(feature => {
                expect(feature).toEqual(<Geo>{});
            });
            const req = httpMock.expectOne(featuresUrl + '/1');
            expect(req.request.method).toBe(`GET`);
            req.flush('{}');
        });
    });
});
