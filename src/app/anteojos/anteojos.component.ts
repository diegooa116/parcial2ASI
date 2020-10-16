import { Component, OnInit } from '@angular/core';
interface requerimientoAnteojos{
  tipoLente:string,
  tipoMaterial:string,
  tipoRecubrimiento:string
};

interface Productos{
  nombreAnteojo:string
  precioAnteojo:number
};

@Component({
  selector: 'app-anteojos',
  templateUrl: './anteojos.component.html',
  styleUrls: ['./anteojos.component.css']
})
export class AnteojosComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {



 /*  this.anteojos.push({
      tipoLente:"Bifocales",
      tipoMaterial:"Plástico",
      tipoRecubrimiento:"Recubrimiento antirreflejo"
    },
    {
      tipoLente:"Monovisión",
      tipoMaterial:"Policarbonato",
      tipoRecubrimiento:"Recubrimiento ultravioleta"
    }
    )*/
    /*this.productos.push({
      nombreAnteojo:"Lentes Daniela",
      precioAnteojo:200000
    },
    {
      nombreAnteojo:"Lentes Valeria",
      precioAnteojo:100000
    }
    
    )*/
  }

  guardarInfoCliente(){
    let infoAgregar:Array<requerimientoAnteojos>= new Array<requerimientoAnteojos>();
    infoAgregar.push({
      tipoLente:"Bifocal",
      tipoMaterial:"Policarbonato",
      tipoRecubrimiento:"Anti Reflejo"

    },
    {
      tipoLente:"Trifocal",
      tipoMaterial:"Policarbonato",
      tipoRecubrimiento:"Anti Reflejo"

    })
    localStorage.setItem("anteojos",JSON.stringify(infoAgregar));//Lo convertimos a un string con JSON.STRINGIFY
  }

  guardarProductos (){
    let productoAgregar:Array<Productos>= new Array<Productos>();
    productoAgregar.push({
      nombreAnteojo:"Lentes Daniela",
      precioAnteojo:200000
    },
    {
      nombreAnteojo:"Lentes Valeria",
      precioAnteojo:100000
    });

    localStorage.setItem("productos",JSON.stringify(productoAgregar));//Lo convertimos a un string con JSON.STRINGIFY
  }


  eliminarTipo(){
    localStorage.removeItem("anteojos");
  }

  eliminarProducto(){
    localStorage.removeItem("productos");
  }

  eliminarTodo(){
    localStorage.clear();
  }

  get requerimientosClientes():requerimientoAnteojos[]{
    let requerimientosLocalStorage:requerimientoAnteojos[]=JSON.parse(localStorage.getItem("anteojos"))
    if(requerimientosLocalStorage==null){
      return new Array<requerimientoAnteojos>();
    }else{

      return requerimientosLocalStorage

    }
    
  }
  get productosLocales():Productos[]{
    let productosLocalStorage:Productos[]=JSON.parse(localStorage.getItem("productos"))
    if(productosLocalStorage==null){
      return new Array<Productos>();
    }else{

      return productosLocalStorage

    }
    
  }

}
