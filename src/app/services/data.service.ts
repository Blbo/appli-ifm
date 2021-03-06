import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  public data = [{
    id: 0,
    img: '../../assets/img/defautAvatar.jpg',
    nom: 'Microsoft',
    offre: 'Datacenter Technician',
    adresse: '92130 Issy-les-Moulineaux',
    presentation: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500.',
    activites: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500',
    poste: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500',
    likeState: 'unliked',
    candidature: 'false'
  },
    {
      id: 1,
      img: '../../assets/img/googleIcon.jpg',
      nom: 'Google',
      offre: 'Administrateur de base de données',
      adresse: '57000 METZ',
      presentation: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500.',
      activites: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500',
      poste: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500',
      likeState: 'unliked',
      candidature: 'false'
    },
    {
      id: 2,
      img: '../../assets/img/CGI.png',
      nom: 'CGI Luxembourg',
      offre: 'Developpeur informatique',
      adresse: 'L-8070 Bertrange',
      presentation: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500.',
      activites: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500',
      poste: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500',
      likeState: 'unliked',
      candidature: 'false'
    },
    {
      id: 3,
      img: '../../assets/img/playStore.jpg',
      nom: 'Luxapps',
      offre: 'Developpeur mobile',
      adresse: 'L-8399 Windhof',
      presentation: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500.',
      activites: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500',
      poste: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500',
      likeState: 'unliked',
      candidature: 'false'
    },
    {
      id: 4,
      img: '../../assets/img/Facebook.png',
      nom: 'Facebook',
      offre: 'Research Scientist, Input and Interaction',
      adresse: 'Redmond, Washington',
      presentation: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500.',
      activites: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500',
      poste: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500',
      likeState: 'unliked',
      candidature: 'false'
    },
    {
      id: 5,
      img: '../../assets/img/defautAvatar.jpg',
      nom: 'Microsoft',
      offre: 'Datacenter Technician',
      adresse: '92130 Issy-les-Moulineaux',
      presentation: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500.',
      activites: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500',
      poste: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500',
      likeState: 'unliked',
      candidature: 'false'
    },
    {
      id: 6,
      img: '../../assets/img/googleIcon.jpg',
      nom: 'Google',
      offre: 'Administrateur de base de données',
      adresse: '57000 METZ',
      presentation: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500.',
      activites: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500',
      poste: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500',
      likeState: 'unliked',
      candidature: 'false'
    },
    {
      id: 7,
      img: '../../assets/img/CGI.png',
      nom: 'CGI Luxembourg',
      offre: 'Developpeur informatique',
      adresse: 'L-8070 Bertrange',
      presentation: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500.',
      activites: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500',
      poste: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500',
      likeState: 'unliked',
      candidature: 'false'
    },
    {
      id: 8,
      img: '../../assets/img/playStore.jpg',
      nom: 'Luxapps',
      offre: 'Developpeur mobile',
      adresse: 'L-8399 Windhof',
      presentation: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500.',
      activites: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500',
      poste: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500',
      likeState: 'unliked',
      candidature: 'false'
    },
    {
      id: 9,
      img: '../../assets/img/Facebook.png',
      nom: 'Facebook',
      offre: 'Research Scientist, Input and Interaction',
      adresse: 'Redmond, Washington',
      presentation: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500.',
      activites: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500',
      poste: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500',
      likeState: 'unliked',
      candidature: 'false'
    },
    {
      id: 10,
      img: '../../assets/img/defautAvatar.jpg',
      nom: 'Microsoft',
      offre: 'Datacenter Technician',
      adresse: '92130 Issy-les-Moulineaux',
      presentation: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500.',
      activites: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500',
      poste: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500',
      likeState: 'unliked',
      candidature: 'false'
    },
    {
      id: 11,
      img: '../../assets/img/googleIcon.jpg',
      nom: 'Google',
      offre: 'Administrateur de base de données',
      adresse: '57000 METZ',
      presentation: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500.',
      activites: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500',
      poste: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500',
      likeState: 'unliked',
      candidature: 'false'
    },
    {
      id: 12,
      img: '../../assets/img/CGI.png',
      nom: 'CGI Luxembourg',
      offre: 'Developpeur informatique',
      adresse: 'L-8070 Bertrange',
      presentation: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500.',
      activites: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500',
      poste: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500',
      likeState: 'unliked',
      candidature: 'false'
    },
    {
      id: 13,
      img: '../../assets/img/playStore.jpg',
      nom: 'Luxapps',
      offre: 'Developpeur mobile',
      adresse: 'L-8399 Windhof',
      presentation: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500.',
      activites: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500',
      poste: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500',
      likeState: 'unliked',
      candidature: 'false'
    },
    {
      id: 14,
      img: '../../assets/img/Facebook.png',
      nom: 'Facebook',
      offre: 'Research Scientist, Input and Interaction',
      adresse: 'Redmond, Washington',
      presentation: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500.',
      activites: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500',
      poste: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500',
      likeState: 'unliked',
      candidature: 'false'
    },
    {
      id: 15,
      img: '../../assets/img/defautAvatar.jpg',
      nom: 'Microsoft',
      offre: 'Datacenter Technician',
      adresse: '92130 Issy-les-Moulineaux',
      presentation: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500.',
      activites: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500',
      poste: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500',
      likeState: 'unliked',
      candidature: 'false'
    },
    {
      id: 16,
      img: '../../assets/img/googleIcon.jpg',
      nom: 'Google',
      offre: 'Administrateur de base de données',
      adresse: '57000 METZ',
      presentation: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500.',
      activites: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500',
      poste: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500',
      likeState: 'unliked',
      candidature: 'false'
    },
    {
      id: 17,
      img: '../../assets/img/CGI.png',
      nom: 'CGI Luxembourg',
      offre: 'Developpeur informatique',
      adresse: 'L-8070 Bertrange',
      presentation: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500.',
      activites: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500',
      poste: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500',
      likeState: 'unliked',
      candidature: 'false'
    },
    {
      id: 18,
      img: '../../assets/img/playStore.jpg',
      nom: 'Luxapps',
      offre: 'Developpeur mobile',
      adresse: 'L-8399 Windhof',
      presentation: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500.',
      activites: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500',
      poste: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500',
      likeState: 'unliked',
      candidature: 'false'
    },
    {
      id: 19,
      img: '../../assets/img/Facebook.png',
      nom: 'Facebook',
      offre: 'Research Scientist, Input and Interaction',
      adresse: 'Redmond, Washington',
      presentation: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500.',
      activites: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500',
      poste: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500',
      likeState: 'unliked',
      candidature: 'false'
    }];

  public dataProfil = [ {
    id: 0,
    imgProfil: '',
    nom: 'Jean',
    prenom: 'Paul',
    ville: 'METZ',
    email: 'a@a.com',
    tel: '06 07 08 09 10',
    typeContrat: 'CDD',
    emploiRecherche:  'Developpeur web',
    localisation: 'METZ',
    rayon: '10kms',
    disponibilite: 'Immédiatement',
    imgCV: ''
  }];

  constructor() { }

  setData(id, data) {
    this.data[id] = data;
  }

  getData(id) {
    return this.data[id];
  }

}
