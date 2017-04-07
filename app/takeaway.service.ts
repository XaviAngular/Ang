import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Card} from './model/card';

@Injectable()
export class takeAwayService {

  constructor(private _http: Http) { }

getPlatos(){
	return this._http.get("http://localhost:8080/tkaApi/api.php/getPlatos")
			.map(res=>res.json());
}

getPlato(id:string){
	return this._http.get("http://localhost:8080/tkaApi/api.php/getPlato/"+id)
			.map(res=>res.json());
}

editPlato(id: string, plato: Card) {
    let json = JSON.stringify(plato);
    let params = "json="+json;
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    return this._http.post("http://localhost:8080/tkaApi/api.php/editPlato/"+id, 
        params, {headers: headers}).map(res => res.json());
  }
getCats(){
  return this._http.get("http://localhost:8080/tkaApi/api.php/getCats")
      .map(res=>res.json());
}

}
