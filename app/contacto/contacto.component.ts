import { Component, OnInit } from '@angular/core';
import {takeAwayService} from "../takeaway.service";

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  providers:[takeAwayService]
})
export class ContactoComponent implements OnInit {
	public gracias:boolean;
  constructor(private _service:takeAwayService) {
  	this.gracias=false;
  }

  ngOnInit() {
  }

  onSubmit(form:any){
  	console.log(form);
  	this._service.addContact(form).subscribe(
          result => {
            if (result.status=="success"){
             console.log("Contacto recibido");
             this.gracias=true;
            }
            else {
              alert("Error petición Mysql");
            }
          },
          error =>{
            alert('Error al enviar contacto');
          }
        )
  }

}
