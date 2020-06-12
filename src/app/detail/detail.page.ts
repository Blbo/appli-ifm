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


  public iconName = 'heart-outline';

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
    }
  }



  toggleLikeState() {

    console.log(this.dataService.data[this.data.id].likeState);
    if (this.dataService.data[this.data.id].likeState === 'unliked') {
      // this.like = 'liked';
      this.iconName = 'heart';
      this.dataService.data[this.data.id].likeState = 'liked';

      console.log(this.dataService.data[this.data.id].likeState);
    } else {
      this.iconName = 'heart-outline';
      // this.data.likeState = 'unliked';
      this.dataService.data[this.data.id].likeState  = 'unliked';

      console.log(this.dataService.data[this.data.id].likeState);
    }
  }

  addCandidature() {
    if (this.dataService.data[this.data.id].candidature === 'false') {
      this.dataService.data[this.data.id].candidature = 'true';

      console.log(this.dataService.data[this.data.id].candidature);
    } else {
      this.dataService.data[this.data.id].candidature  = 'false';

      console.log(this.dataService.data[this.data.id].candidature);
    }
  }

}

