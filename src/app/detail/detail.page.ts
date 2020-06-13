import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {NavController} from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  data: any;


  public iconName = '';
  public  iconCandidature = '';

  constructor( private route: ActivatedRoute,
               private router: Router,
               private navCtrl: NavController,
               public dataService: DataService) {
  }

  ngOnInit() {
    if (this.route.snapshot.data.special) {
      this.data = this.route.snapshot.data.special;
      if (this.dataService.data[this.data.id].likeState === 'unliked') {
        this.iconName = 'heart-outline';
      } else {
        this.iconName = 'heart';
      }
      if (this.dataService.data[this.data.id].candidature === 'false') {
        this.iconCandidature = 'POSTULER A L\'OFFRE';
      } else {
        this.iconCandidature = 'ANNULER MA CANDIDATURE';
      }
    }
  }

  toggleLikeState() {

    console.log('debut : ' + this.dataService.data[this.data.id].likeState);
    if (this.dataService.data[this.data.id].likeState === 'unliked') {
      this.iconName = 'heart';
      this.dataService.data[this.data.id].likeState = 'liked';

      console.log('sortie : ' + this.dataService.data[this.data.id].likeState);
    } else {
      this.iconName = 'heart-outline';
      this.dataService.data[this.data.id].likeState  = 'unliked';

      console.log('sortie : ' + this.dataService.data[this.data.id].likeState);
    }
  }

  addCandidature() {
    console.log('entree : ' + this.dataService.data[this.data.id].candidature);
    if (this.dataService.data[this.data.id].candidature === 'false') {
      this.dataService.data[this.data.id].candidature = 'true';
      this.iconCandidature = 'ANNULER MA CANDIDATURE';

      console.log(this.dataService.data[this.data.id].candidature);
    } else {
      this.dataService.data[this.data.id].candidature  = 'false';
      this.iconCandidature = 'POSTULER A L\'OFFRE';

      console.log(this.dataService.data[this.data.id].candidature);
    }
  }

  // changeName() {
  //   if (this.dataService.data[this.data.id].candidature  = 'false'){
  //
  //   } else {
  //     this.iconCandidature = "ANNULER CETTE CANDIDATURE";
  //   }
  // }

}

