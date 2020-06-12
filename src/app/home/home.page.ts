import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ConnectService } from '../services/connect.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public router: Router,
              public connectService: ConnectService) { }

  ngOnInit() {
  }

  public goToTab1(): void {
    if (this.connectService.connecte) {
      this.router.navigate(['tabs/tab1']);
    }else {
      this.router.navigate(['connexion']);
    }
  }
}
