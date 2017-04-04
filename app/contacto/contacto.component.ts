import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import {TakeawayService} from "../takeaway.service"

import {Contacto} from "../model/contacto";

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  providers: [TakeawayService]
})
export class ContactoComponent implements OnInit {
	public contacto:Contacto;
  public errorMessage;
  public status;

  constructor(
   private   _takeawayService: TakeawayService,
   private _route: ActivatedRoute,
   private _router: Router
    ) {
  		
   }

  ngOnInit() {
  	this.contacto= new Contacto("","","");
  }
  onSubmit(form:any){
  	console.log(this.contacto);
    console.log(form);
    this._takeawayService.addContact(form).subscribe(
          result => {
              this.contacto = result.data;
              this.status = result.status;
              if(this.status !== "success"){
                alert("Error en el servidor");
              }
              else {
                this.contacto= new Contacto("","","");
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

}
