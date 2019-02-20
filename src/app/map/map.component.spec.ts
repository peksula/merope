import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { MapComponent } from './map.component';
import { GeoService } from './geo.service';

describe('MapComponent', () => {
    let component: MapComponent;
    // let httpMock: HttpTestingController;
    let fixture: ComponentFixture<MapComponent>;

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
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
