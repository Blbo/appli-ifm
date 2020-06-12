import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ConnectService } from '../services/connect.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  connexionForm: FormGroup;
  error_messages = {
    email: [
      {type: 'required', message: 'L\'adresse email est requise.'},
      {type: 'pattern', message: 'L\'adresse email n\'est pas valide.'}
    ],
    mdp: [
      {type: 'required', message: 'Le mot de passe est requis.'}
    ]
  };

  constructor(public formBuilder: FormBuilder,
              public connectService: ConnectService,
              public alertController: AlertController,
              public router: Router) {
    this.connexionForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

      ])),
      mdp: new FormControl('', Validators.compose([
        Validators.required]))
    });
  }

  ngOnInit() {
  }

  public connexion() {
    const email = this.connexionForm.value.email;
    const mdp = this.connexionForm.value.mdp;
    if (email !== 'a@a.com') {
      this.showAlertEmail();
    } else {
      if (mdp !== 'a') {
        this.showAlertMdp();
      }else {
        this.connectService.connecte = true;
        this.router.navigate(['tabs/tab1']);
      }
    }
    console.log(email);
    console.log(mdp);
  }

  async showAlertEmail() {
    const alert = await this.alertController.create({
      header: 'Données incorrectes',
      message: 'Email erroné',
      buttons: ['Réessayer']
    });
    await alert.present();
  }

  async showAlertMdp() {
    const alert = await this.alertController.create({
      header: 'Données incorrectes',
      message: 'Mot de passe erroné',
      buttons: ['Réessayer']
    });
    await alert.present();
  }
}
