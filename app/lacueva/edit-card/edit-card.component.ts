import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {TakeawayService} from "../../takeaway.service";
import {Card} from "../../model/card";


@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.css'],
  providers: [TakeawayService]
})

export class EditCardComponent implements OnInit {
	public plato:Card;
	public status:string;
	public errorMessage:any;
	public id:string;
	
  constructor(
  		private _route: ActivatedRoute,
		private _router: Router,
		private _takeawayService: TakeawayService
  	) {

  	 }

  ngOnInit() {
  	this.plato= new Card(0,"",0,"","",0,"");
  	this.getCardInfo();
  	
  }

  getCardInfo(){
  	
  	this._route.params.forEach((params: Params) => {
  		this.id=params['id'];
  	});

  	this._takeawayService.getPlato(this.id)
				.subscribe(
					result => {
							this.plato = result.data;
							this.status = result.status;
							console.log(this.plato);
							if(this.status !== "success"){
								alert("Error en el servidor");
							}
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

   onSubmit(form:any){
  	console.log(this.plato);
    console.log(form);
    this._takeawayService.editPlato(this.id,this.plato).subscribe(
          result => {
              
              if(this.status !== "success"){
                alert("Error en el servidor");
              }
              else {console.log("Datos actualizados")}
                        
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
