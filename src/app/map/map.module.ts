import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { MapComponent } from './map.component';
import { MapRoutingModule } from './map-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        MapComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, { dataEncapsulation: false }
        ),
        LeafletModule.forRoot(),
        MapRoutingModule
    ]
})
export class MapModule {
}
