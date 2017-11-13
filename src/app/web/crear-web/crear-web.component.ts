import { Component, OnInit } from '@angular/core';
import { WebService } from "../../services/web.service";
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Contenido } from "../../interfaces/interfaces.contenido";

@Component({
  selector: 'app-crear-web',
  templateUrl: './crear-web.component.html',
  styles: []
})
export class CrearWebComponent implements OnInit {
  videos: Observable<any[]>;

  contenido: Contenido = {
    descripcion: "",
    titulo: "",
    url: "",
    img: ""
  }

  constructor(private WebService: WebService, afDB: AngularFireDatabase) { }

  ngOnInit() {
  }

  guardar() {

    this.WebService.crearWeb(this.contenido)
      .subscribe(data => {
      })

  }

}