import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/map',
        pathMatch: 'full'
    },
    {
        // Lazy load map module with Angular router upon navigation
        path: 'map',
        loadChildren: './map/map.module#MapModule'
    },
    {
        path: '**',
        redirectTo: '/'
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class AppRoutingModule {
}
