import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Requerimiento } from '../models/requerimiento';
import {ClientesService} from '../services/clientes.service';


@Component({
  selector: 'app-agregar-requerimientos',
  templateUrl: './agregar-requerimientos.component.html',
  styleUrls: ['./agregar-requerimientos.component.css']
})
export class AgregarRequerimientosComponent implements OnInit {
  formularioAgregar:FormGroup;
  requerimiento:Requerimiento= new Requerimiento();
  constructor(private fb:FormBuilder,public clientesServicio:ClientesService) { }

  ngOnInit(): void {
    this.formularioAgregar=this.fb.group({
      tipoLente:["",Validators.required],
      tipoMaterial:["",Validators.required],
      tipoRecubrimiento:["",Validators.required]
    })
  }

  agregar(){
    this.requerimiento=this.formularioAgregar.value as Requerimiento;
    this.clientesServicio.agregarLocalStorage(this.requerimiento)
    this.formularioAgregar.reset()
  }

}
