import { Component } from '@angular/core';
import { Router} from '@angular/router';
import {DataService} from '../services/data.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {



  constructor(public router: Router, public dataService: DataService) {  }

  detailAnnonce(annonce) {
    console.log(annonce.id);
    const URLannonce = '/detail/' + annonce.id;
    /*this.dataService.setData(annonce.id, annonce);*/
    this.router.navigateByUrl(URLannonce);
  }

}

