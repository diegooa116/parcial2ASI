import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styleUrls: ['./precios.component.css']
})
export class PreciosComponent implements OnInit {
  datos:Array<any>=[]
  datos2:Array<any>=[]
  constructor(public httpClient:HttpClient){}

  ngOnInit(): void {
    this.httpClient.get('http://127.0.0.1:8000/baseGym').subscribe((res:any)=>{
      console.log(res);
      this.datos=res;
    });
    
    this.httpClient.get('http://127.0.0.1:8000/baseGym/despedida').subscribe((res:any)=>{
      console.log(res);
      this.datos2=res;
    });

   
  }

}
