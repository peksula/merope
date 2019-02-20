import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { GeoService } from './geo.service';

describe('GeoService', () => {
    let httpMock: HttpTestingController;
    let service: GeoService;

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
});
