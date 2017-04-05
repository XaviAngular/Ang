import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { InfoComponent } from './info/info.component';
import { FotosComponent } from './fotos/fotos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LacuevaComponent } from './lacueva/lacueva.component';
import { CategoriasComponent } from './lacueva/categorias/categorias.component';
import { PlatosComponent } from './lacueva/platos/platos.component';

import {routing,appRoutingProviders} from './app.routing';
import { FiltroPipe } from './filtro.pipe';
import { EditPlatoComponent } from './lacueva/edit-plato/edit-plato.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    InfoComponent,
    FotosComponent,
    ContactoComponent,
    LacuevaComponent,
    CategoriasComponent,
    PlatosComponent,
    FiltroPipe,
    EditPlatoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
