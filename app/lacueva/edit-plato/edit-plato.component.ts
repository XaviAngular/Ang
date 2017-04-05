import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute, Params} from '@angular/router';
import {takeAwayService} from "../../takeaway.service";
import {Card} from "../../model/card";

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
  constructor(
  	private _takeAwayService: takeAwayService,
  	private _route:ActivatedRoute,
  	private _router: Router
  	) { }

  ngOnInit() {
  	this.plato= new Card(0,"",0,"","",0,"");
  	this.getPlatoInfo();
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

  onSubmit(){
  	console.log(this.plato);
  	
    this._takeAwayService.editPlato(this.id,this.plato).subscribe(
          result => {
              this.status=result.status;
              if(this.status !== "success"){
                console.log(this.status);
              }
              else {console.log("Datos actualizados")}
                        
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
