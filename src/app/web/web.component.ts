import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent implements OnInit {
  web: Observable<any[]>;

  constructor(afDB: AngularFireDatabase) {
    this.web = afDB.list('web').valueChanges();
  }

  ngOnInit() {
  }

}
