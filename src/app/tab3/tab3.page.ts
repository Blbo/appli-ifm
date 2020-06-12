import { Component } from '@angular/core';
import {DataService} from '../services/data.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public router: Router,
              public dataService: DataService) {}

  detailAnnonce(annonce) {
    console.log(annonce.id);
    const URLannonce = '/detail/' + annonce.id;
    this.router.navigateByUrl(URLannonce);
  }

}
