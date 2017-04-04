import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { InicioComponent } from './inicio/inicio.component';

const appRoutes: Routes=[
{
	path:'',
	redirectTo:'/',
	pathMatch:'full'
},
{path: "",  component: InicioComponent},
{path: "contacto", component: ContactoComponent},
{path: "nosotros", component: NosotrosComponent}
];

export const appRoutingProviders:any[]=[];
export const routing: ModuleWithProviders= RouterModule.forRoot(appRoutes);
