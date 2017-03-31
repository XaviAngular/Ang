import {ModuleWithProviders} from "@angular/core";
import {Routes,RouterModule} from "@angular/router";

import { InicioComponent } from './inicio/inicio.component';
import { InfoComponent } from './info/info.component';
import { FotosComponent } from './fotos/fotos.component';
import { ContactoComponent } from './contacto/contacto.component';

const appRoutes: Routes=[
{
	path:'',
	redirectTo:'/',
	pathMatch:'full'
},
{path: '', component:InicioComponent},
{path:'info', component:InfoComponent},
{path:'fotos', component:FotosComponent},
{path:'contacto', component:ContactoComponent}
];

export const appRoutingProviders:any[]=[];
export const routing: ModuleWithProviders=RouterModule.forRoot(appRoutes);