import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { InicioComponent } from './inicio/inicio.component';
import { LacuevaComponent } from './lacueva/lacueva.component';
import { EditCardComponent } from './lacueva/edit-card/edit-card.component';

const appRoutes: Routes=[
{
	path:'',
	redirectTo:'/',
	pathMatch:'full'
},
{path: "",  component: InicioComponent},
{path: "contacto", component: ContactoComponent},
{path: "nosotros", component: NosotrosComponent},
{path: "lacueva", component: LacuevaComponent},
{path: "Edit-Plato/:id", component: EditCardComponent}
];

export const appRoutingProviders:any[]=[];
export const routing: ModuleWithProviders= RouterModule.forRoot(appRoutes);
