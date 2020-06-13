import { Component } from '@angular/core';
import {DataService} from '../services/data.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public router: Router,
              public dataService: DataService) {}

  detailAnnonce(annonce) {
    console.log(annonce.id);
    const URLannonce = '/detail/' + annonce.id;
    this.router.navigateByUrl(URLannonce);
  }
}
