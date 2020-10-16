import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioClienteComponent } from './formulario-cliente/formulario-cliente.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ejemplo1Component } from './componentes/ejemplo1/ejemplo1.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { AnteojosComponent } from './anteojos/anteojos.component';
import { PreciosComponent } from './precios/precios.component';
import { InicioComponent } from './inicio/inicio.component';
import { HomeComponent } from './home/home.component';
import { AgregarRequerimientosComponent } from './agregar-requerimientos/agregar-requerimientos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientesService } from './services/clientes.service';




@NgModule({
  declarations: [
    AppComponent,
    FormularioClienteComponent,
    Ejemplo1Component,
    EncabezadoComponent,
    AnteojosComponent,
    PreciosComponent,
    InicioComponent,
    HomeComponent,
    AgregarRequerimientosComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [
    ClientesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
