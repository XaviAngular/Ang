import { Component, OnInit } from '@angular/core';
import {takeAwayService} from "../takeaway.service";

import {InicioComponent} from "../inicio/inicio.component";
@Component({
  selector: 'app-lacueva',
  templateUrl: './lacueva.component.html',
  styleUrls: ['./lacueva.component.css'],
  providers:[takeAwayService]
})
export class LacuevaComponent extends InicioComponent implements OnInit {

  ngOnInit() {
  	this.listaPlatos();
  	console.log(this.platos);
  }

}
