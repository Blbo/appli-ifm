import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  dataProfil: any;

  inputNom = this.dataService.dataProfil[0].nom;
  inputPrenom = this.dataService.dataProfil[0].prenom;
  inputVille = this.dataService.dataProfil[0].ville;
  inputEmail = this.dataService.dataProfil[0].email;
  inputTel = this.dataService.dataProfil[0].tel;
  inputContrat = this.dataService.dataProfil[0].typeContrat;
  inputEmploi = this.dataService.dataProfil[0].emploiRecherche;
  inputRayon = this.dataService.dataProfil[0].rayon;
  inputLocalisation = this.dataService.dataProfil[0].localisation;
  inputDispo = this.dataService.dataProfil[0].disponibilite;


  constructor(public dataService: DataService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {

  }


  dataProfilSave() {

    if (this.inputNom !== '' || this.inputNom !== this.dataService.dataProfil[0].nom) {
      this.dataService.dataProfil[0].nom = this.inputNom;
    }
    if (this.inputPrenom !== '' || this.inputPrenom !== this.dataService.dataProfil[0].prenom) {
      this.dataService.dataProfil[0].prenom = this.inputPrenom;
    }
    if (this.inputVille !== '' || this.inputVille !== this.dataService.dataProfil[0].ville) {
      this.dataService.dataProfil[0].ville = this.inputVille;
    }
    if (this.inputEmail !== '' || this.inputEmail !== this.dataService.dataProfil[0].email) {
      this.dataService.dataProfil[0].email = this.inputEmail;
    }
    if (this.inputTel !== '' || this.inputTel !== this.dataService.dataProfil[0].tel) {
      this.dataService.dataProfil[0].tel = this.inputTel;
    }
    if (this.inputContrat !== '' || this.inputContrat !== this.dataService.dataProfil[0].typeContrat) {
      this.dataService.dataProfil[0].typeContrat = this.inputContrat;
    }
    if (this.inputLocalisation !== '' || this.inputLocalisation !== this.dataService.dataProfil[0].localisation) {
      this.dataService.dataProfil[0].localisation = this.inputLocalisation;
    }
    if (this.inputEmploi !== '' || this.inputEmploi !== this.dataService.dataProfil[0].emploiRecherche) {
      this.dataService.dataProfil[0].emploiRecherche = this.inputEmploi;
    }
    if (this.inputRayon !== '' || this.inputRayon !== this.dataService.dataProfil[0].rayon) {
      this.dataService.dataProfil[0].rayon = this.inputRayon;
    }
    if (this.inputDispo !== '' || this.inputDispo !== this.dataService.dataProfil[0].disponibilite) {
      this.dataService.dataProfil[0].disponibilite = this.inputDispo;
    }
  }
}
