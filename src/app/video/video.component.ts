import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  videos: Observable<any[]>;

  constructor(afDB: AngularFireDatabase) {
    this.videos = afDB.list('video').valueChanges();
  }

  ngOnInit() {
  }


}
