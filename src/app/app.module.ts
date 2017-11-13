import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { firebaseConfig } from "./firebase.config";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

import { APP_ROUTING } from "./app.routing";

//servicios
import { VideoService } from "./services/video.service";
import { WebService } from "./services/web.service";
import { PhotoService } from "./services/photo.service";

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { VideoComponent } from './video/video.component';
import { WebComponent } from './web/web.component';
import { PhotoComponent } from './photo/photo.component';
import { CrearVideoComponent } from './video/crear-video/crear-video.component';
import { CrearWebComponent } from './web/crear-web/crear-web.component';
import { CrearPhotoComponent } from './photo/crear-photo/crear-photo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    VideoComponent,
    WebComponent,
    PhotoComponent,
    CrearVideoComponent,
    CrearWebComponent,
    CrearPhotoComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    VideoService,
    WebService,
    PhotoService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



