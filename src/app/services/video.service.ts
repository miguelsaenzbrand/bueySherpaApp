import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { Contenido } from "../interfaces/interfaces.contenido";

@Injectable()
export class VideoService {

  contenidoURL: string = "https://bueysherpa-ad7c6.firebaseio.com/video.json"

  constructor(private http: Http) { }

  nuevoContenido(contenido: Contenido) {



  }

  crearVideo(contenido: Contenido) {
    let body = JSON.stringify(contenido);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.contenidoURL, body, { headers })

      .map(res => {
        console.log(res.json());
        return res.json();
      })
  }
  updateVideo() { }
  getListVideo() { }
  getItemVideo() { }
  deleteItemVideo() { }

}
