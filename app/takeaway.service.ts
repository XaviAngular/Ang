import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class takeAwayService {

  constructor(private _http: Http) { }

getPlatos(){
	return this._http.get("http://localhost:8080/tkaApi/api.php/getPlatos")
			.map(res=>res.json());
}


}
