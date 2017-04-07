import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute, Params} from '@angular/router';
import {takeAwayService} from "../../takeaway.service";
import {Card} from "../../model/card";

declare var Materialize:any;

@Component({
  selector: 'app-edit-plato',
  templateUrl: './edit-plato.component.html',
  styleUrls: ['./edit-plato.component.css'],
  providers: [takeAwayService]
})
export class EditPlatoComponent implements OnInit {
	public plato:Card;
	public id:string;
	public status:string;
	public errorMessage:any;
  public cats;
  constructor(
  	private _takeAwayService: takeAwayService,
  	private _route:ActivatedRoute,
  	private _router: Router
  	) { }

  ngOnInit() {
  	this.plato= new Card(0,"",0,"","",0,"");
  	this.getPlatoInfo();
    this.getCats();
   
  }

  getPlatoInfo(){
  	this._route.params.forEach(
  		(params: Params)=>
  		{this.id=params['id']}); 

  	this._takeAwayService.getPlato(this.id)
      .subscribe(
          result => {
            if (result.status=="success"){
             this.plato=result.data;
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
  getCats(){
    this._takeAwayService.getCats()
      .subscribe(
          result => {
            if (result.status=="success"){
             this.cats=result.data;
             console.log(this.cats);
            }
            else {
              alert("Error petición Mysql");
            }
          },
          error =>{
            alert('Error al obtener listado categorias');
          }
        )
  }

  onSubmit(){
  	console.log(this.plato);
  	
    this._takeAwayService.editPlato(this.id,this.plato).subscribe(
          result => {
              this.status=result.status;
              if(this.status !== "success"){
                console.log(this.status);
              }
              else {
                console.log("Datos actualizados");
                Materialize.toast('Datos actualizados!', 4000);
              }
                        
          },
          error => {
            this.errorMessage = <any>error;
            
            if(this.errorMessage !== null){
              console.log(this.errorMessage);
              alert("Error en la petición editPlato");
            }
          }
        );

  }




}
