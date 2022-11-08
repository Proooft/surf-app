export class Spot {
    id: number;
    nom: string;
    departement: string;
    lat: number;
    lng:number;
    rate: number;
    picture: string;
    type: string;
    created: Date;

  constructor(
    nom: string ='Entrer un nom...',
    picture: string = 'https://buckettest35.s3.eu-west-3.amazonaws.com/peniche.jpg',
    type: string = 'Beach Break',
    created: Date =  new Date(),
    departement: string= "Ille-et-Vilaine",
    rate: number = 3,
    lat:number= 48.11282729719652,
    lng:number= -1.6780387546852158 
   
    ){
  this.nom = nom;
  this.picture = picture;
  this.type =  type;
  this.created = created;
  this.departement = departement;
  this.rate =  rate;
   this.lat = lat;
   this.lng = lng;
    }
  }