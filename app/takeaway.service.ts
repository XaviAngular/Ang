import { Injectable } from '@angular/core';
import {Http, Response, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {Contacto} from "./model/contacto";
import {Card} from "./model/card";

@Injectable()
export class TakeawayService {

  constructor(private _http: Http) {}

  getCards(){
  	//Petición Ajax asíncrona, el metodo map es el encargado de tratar los datos
  	return this._http.get("http://localhost/tkapi/takeaway-api.php/cards")
  	.map(res => res.json());
  }

  getPlato(id: string){
    return this._http.get("http://localhost/tkapi/takeaway-api.php/getPlato/"+id)
    .map(res => res.json());
  }

  addContact(contacto:Contacto){
  	let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
  	let json = JSON.stringify(contacto);
  	let params = "json="+json;
  	//Petición Ajax asíncrona, el metodo map es el encargado de tratar los datos
  	return this._http.post("http://localhost/tkapi/takeaway-api.php/addContact", 
  		params, {headers: headers}).map(res => res.json());
  }

  editPlato(id: string, plato: Card) {
    let json = JSON.stringify(plato);
    let params = "json="+json;
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    return this._http.post("http://localhost/tkapi/takeaway-api.php/editPlato/"+id, 
        params, {headers: headers}).map(res => res.json());
  }


}
