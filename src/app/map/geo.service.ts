import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Tile } from './tile';
import { TILES } from './mock-tiles';

@Injectable({
  providedIn: 'root'
})
export class TileService {
    constructor() {
    }

    getTiles(): Observable<Tile[]> {
        return of(TILES);
    }
}
