import { Component, OnInit } from '@angular/core';

import {Card} from "../model/card";
import {takeAwayService} from "../takeaway.service";
import {FiltroPipe} from "../filtro.pipe";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers:[takeAwayService]
})
export class InicioComponent implements OnInit {
	public platos:Card[];

  constructor(private _tkaService:takeAwayService) {
  	
   }

  ngOnInit() {
    this.listaPlatos();
  }

  listaPlatos(){
    this._tkaService.getPlatos()
      .subscribe(
          result => {
            if (result.status=="success"){
             this.platos=result.data;
            }
            else {
              alert("Error petición Mysql");
            }
          },
          error =>{
            alert('Error al obtener listado platos');
          }
        )
  }

}
