import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from './home/home.component';
import { VideoComponent } from './video/video.component';
import { WebComponent } from './web/web.component';
import { PhotoComponent } from './photo/photo.component';
import { CrearVideoComponent } from './video/crear-video/crear-video.component';
import { CrearPhotoComponent } from './photo/crear-photo/crear-photo.component';
import { CrearWebComponent } from './web/crear-web/crear-web.component';




const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'video', component: VideoComponent },
    { path: 'web', component: WebComponent },
    { path: 'photo', component: PhotoComponent },
    { path: 'crear-video', component: CrearVideoComponent },
    { path: 'crear-photo', component: CrearPhotoComponent },
    { path: 'crear-web', component: CrearWebComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true })