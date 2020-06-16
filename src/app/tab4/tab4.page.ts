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
  inputlocalisation = this.dataService.dataProfil[0].localisation;
  inputDispo = this.dataService.dataProfil[0].disponibilite;




  constructor(public dataService: DataService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {

  }


  dataProfilSave() {
    console.log(this.inputNom);
    console.log(this.dataService.dataProfil[0].nom);
    if (this.inputNom !== '' || this.inputNom !== this.dataService.dataProfil[0].nom){
      this.dataService.dataProfil[0].nom = this.inputNom;
    }
    console.log('inputnom: ' + this.inputNom);
    console.log('this.dataService.dataProfil[0].nom : ' + this.dataService.dataProfil[0].nom);

    if (this.inputPrenom !== '' || this.inputPrenom !== this.dataService.dataProfil[0].prenom){
      this.dataService.dataProfil[0].prenom = this.inputPrenom;
    }
    console.log('inputprenom: ' + this.inputPrenom);
    console.log('this.dataService.dataProfil[0].prenom : ' + this.dataService.dataProfil[0].prenom);
  }

}
