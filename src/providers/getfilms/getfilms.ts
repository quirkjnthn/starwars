import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


/*
  Generated class for the GetfilmsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GetfilmsProvider {

  public url: string;
  public urlships: string;
  public urlvehicles: string;

  constructor(public http: Http) {
    this.urlships = 'https://swapi.co/api/starships/'; 
    this.urlvehicles = 'https://swapi.co/api/vehicles/'; 
    this.url = 'https://swapi.co/api/people/'; 
  }

  getVehicles() {
    return this.http.get(this.urlvehicles)
    .map( res => res.json());
  }

  getPeliculas() {
    return this.http.get(this.url)
    .map( res => res.json());
  }

  getShips() {
    return this.http.get(this.urlships)
    .map( res => res.json());
  }

}
