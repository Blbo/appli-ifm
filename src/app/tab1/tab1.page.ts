import { Component } from '@angular/core';
import { Router} from '@angular/router';
import {DataService} from '../services/data.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  searchJob = '';
  data: any;
  allData = [];
  filterData = [];

  constructor(public router: Router, public dataService: DataService) {}

  detailAnnonce(annonce) {
    console.log(annonce.id);
    const URLannonce = '/detail/' + annonce.id;
    this.router.navigateByUrl(URLannonce);
  }

  ionViewDidEnter(){
    this.allData = this.dataService.data;
    this.filterData = this.allData;
  }

/*  setFilteredLocations(){
    if (this.searchJob !== '') {
      console.log('entree de fction :' + this.filterData.length);
      this.filterData = this.allData.filter((annonce) => {
        console.log('sortie de fction :' + this.filterData.length);
        return annonce.offre.toLowerCase().indexOf(this.searchJob.toLowerCase()) > -1;
      });
    }
  }*/

  setFilteredLocations(ev: CustomEvent){
    console.log('mot de recherche :' + this.searchJob);
    this.filterData = this.allData;
    if (this.searchJob && this.searchJob.trim() !== '') {
      console.log('entree de fction :' + this.filterData.length);
      this.filterData = this.filterData.filter(annonce => {
        console.log('sortie de fction :' + this.filterData.length);
        return annonce.offre.toLowerCase().indexOf(this.searchJob.trim().toLowerCase()) > -1;
      });
    } else {
      return this.allData;
    }

  }



}

