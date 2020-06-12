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

  public like = 'unliked';
  public iconName = 'heart-outline';

  constructor( private route: ActivatedRoute,
               private router: Router,
               private navCtrl: NavController,
               public dataService: DataService) {
  }

  ngOnInit() {
    if (this.route.snapshot.data.special) {
      this.data = this.route.snapshot.data.special;

    }
  }

  toggleLikeState() {


    if (this.like === 'unliked') {
      this.like = 'liked';
      this.iconName = 'heart';
      this.data.likeState = 'liked';
      this.dataService.data[this.id].likeState = 'liked';
      // this.dataService.data = 'liked';
      // this.data[this.likeState] = 'liked';

      console.log(this.data);
    } else {
      this.like = 'unliked';
      this.iconName = 'heart-outline';
      this.data.likeState = 'unliked';
      this.dataService.data[this.id].likeState  = 'unliked';
      // this.data[this.likeState] = 'unliked';

      console.log(this.data);
    }
  }

}

