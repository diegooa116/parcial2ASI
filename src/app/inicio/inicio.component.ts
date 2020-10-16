import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})


export class InicioComponent implements OnInit {
formularioAgregar:FormGroup;
  constructor() { }

  ngOnInit(): void {
    /**this.formularioAgregar=this.fb.group({
      tipoLentes:["",Validators.required],
      materilaLentes:["",Validators.required],
      recubrimientoLentes:["",Validators.required]
      

    })*/
  }

}
