import { Component } from "@angular/core";


@Component({
  selector:'app-acumulador',
  templateUrl:'./acumulador.component.html'
})
export class AcumuladorComponent{

  titulo:string="Acumulador App";
  numero:number=10;
  aumento:number=3;


  acumulador(valor:number):void{
    this.numero += valor;
  }



}
