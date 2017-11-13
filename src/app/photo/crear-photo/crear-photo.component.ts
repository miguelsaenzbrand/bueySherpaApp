import { Component, OnInit } from '@angular/core';
import { PhotoService } from "../../services/photo.service";
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Contenido } from "../../interfaces/interfaces.contenido";

@Component({
  selector: 'app-crear-photo',
  templateUrl: './crear-photo.component.html',
  styles: []
})
export class CrearPhotoComponent implements OnInit {
  photos: Observable<any[]>;

  contenido: Contenido = {
    descripcion: "",
    titulo: "",
    url: "",
    img: ""
  }

  constructor(private PhotoService: PhotoService, afDB: AngularFireDatabase) { }

  ngOnInit() {
  }

  guardar() {

    this.PhotoService.crearPhoto(this.contenido)
      .subscribe(data => {
      })

  }

}
