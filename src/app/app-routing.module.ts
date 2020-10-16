import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarRequerimientosComponent } from './agregar-requerimientos/agregar-requerimientos.component';
import { AnteojosComponent } from './anteojos/anteojos.component';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { PreciosComponent } from './precios/precios.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
 // {
  //  path:'',component:InicioComponent
  //},
  {
    path:'anteojos',component:AnteojosComponent
  },
  {
    path:'precios',component:PreciosComponent
  },
  {
    path:'agregar-requerimientos',component:AgregarRequerimientosComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
