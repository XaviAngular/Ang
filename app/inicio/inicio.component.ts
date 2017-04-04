import { Component, OnInit } from '@angular/core';

import {Card} from "../model/card";
import {TakeawayService} from "../takeaway.service"

import {FiltroPipe} from "../filtro.pipe";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers: [TakeawayService]
})
export class InicioComponent implements OnInit {
	public platos:Card[];
	public status: string;
	public errorMessage;
	public loading;

  constructor(private _takeawayService: TakeawayService) {
  		
  	}

  ngOnInit() {
 	this.getPLatos();
  }

  getPLatos(){
  	this._takeawayService.getCards()
				.subscribe(
					result => {
							this.platos = result.data;
							this.status = result.status;

							if(this.status !== "success"){
								alert("Error en el servidor");
							}

							this.loading = 'hide';
					},
					error => {
						this.errorMessage = <any>error;
						
						if(this.errorMessage !== null){
							console.log(this.errorMessage);
							alert("Error en la petición getCards");
						}
					}
				);
  }

}
