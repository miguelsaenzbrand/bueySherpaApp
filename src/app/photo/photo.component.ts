import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  photos: Observable<any[]>;

  constructor(afDB: AngularFireDatabase) {
    this.photos = afDB.list('photo').valueChanges();
  }

  ngOnInit() {
  }
}
