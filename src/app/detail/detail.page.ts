import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  data: any;
  public likeState = 'unliked';
  public iconName = 'heart-outline';

  constructor( private route: ActivatedRoute,
               private router: Router,
               private navCtrl: NavController) {
  }

  ngOnInit() {
    if (this.route.snapshot.data.special) {
      this.data = this.route.snapshot.data.special;
      console.log(this.data.img);
    }
  }

  toggleLikeState() {


    if (this.likeState === 'unliked') {
      this.likeState = 'liked';
      this.iconName = 'heart';
      this.data[this.likeState] = 'liked';
      console.log(this.data[this.likeState]);
      console.log(this.data);
    } else {
      this.likeState = 'unliked';
      this.iconName = 'heart-outline';
      this.data[this.likeState] = 'unliked';
      console.log(this.data[this.likeState]);
      console.log(this.data);
    }
  }

}

