import { Component, OnInit } from '@angular/core';
import { VideoService } from "../../services/video.service";
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Contenido } from "../../interfaces/interfaces.contenido";

@Component({
  selector: 'app-crear-video',
  templateUrl: './crear-video.component.html',
  styles: []
})
export class CrearVideoComponent implements OnInit {
  videos: Observable<any[]>;

  contenido: Contenido = {
    descripcion: "",
    titulo: "",
    url: "",
    img: ""
  }

  constructor(private VideoService: VideoService, afDB: AngularFireDatabase) { }

  ngOnInit() {
  }

  guardar() {

    this.VideoService.crearVideo(this.contenido)
      .subscribe(data => {
      })

  }

}
