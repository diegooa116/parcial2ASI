import { Injectable } from '@angular/core';
import { Requerimiento } from '../models/requerimiento';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }

  agregarLocalStorage(requerimiento:Requerimiento){
    let anteojosAntiguos:Requerimiento[]=this.anteojosLocalStorage;
    anteojosAntiguos.push(requerimiento)
    localStorage.setItem("requerimiento",JSON.stringify(anteojosAntiguos))
   
  }

  get anteojosLocalStorage():Requerimiento[]{
    let anteojosDesdeLocalStorage:Requerimiento[]= JSON.parse(localStorage.getItem("requerimiento"))
    if(anteojosDesdeLocalStorage==null){
      return new Array<Requerimiento>();
    }else{
      return anteojosDesdeLocalStorage;
    }
    
  }
}
