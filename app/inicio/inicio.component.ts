import { Component, OnInit } from '@angular/core';

import {Card} from "../model/card";
import {takeAwayService} from "../takeaway.service";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers:[takeAwayService]
})
export class InicioComponent implements OnInit {
	public titulo:string;
	public numero:number;
	public card1:Card;
	public card2:Card;
	public platos:Card[];

  constructor(private _tkaService:takeAwayService) {
  	this.titulo="Hola que tal";
  	this.numero=10;
  	this.card1 = new Card(5,"Calamares Romana",10.50,"calamaresRomana.jpg","Texto de descripción", 2);
  	this.card2 = new Card(2,"Sepia plancha", 8.70,"sepiaplancha.jpg","Texto de descripción", 1);
  	this.platos = [this.card1,this.card2];
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
