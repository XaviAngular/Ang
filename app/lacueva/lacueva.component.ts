import { Component, OnInit } from '@angular/core';
import {Card} from "../model/card";
import {TakeawayService} from "../takeaway.service";
import {InicioComponent} from "../inicio/inicio.component";
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-lacueva',
  templateUrl: './lacueva.component.html',
  styleUrls: ['./lacueva.component.css'],
  providers: [TakeawayService]
})
export class LacuevaComponent extends InicioComponent implements OnInit  {

  ngOnInit() {
  	this.getPLatos();

  }

}
