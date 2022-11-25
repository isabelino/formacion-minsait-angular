import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/personajes.interface";

@Injectable()
export class AnimeService{

  constructor(){
    console.log("Servicio iniciado...");
  }

  private _personajes:Personaje[] = [
    {
      nombre: "Krilin",
      poder: 1000
    },{
      nombre: "Gohan",
      poder: 15000
    },
    {
      nombre: "Goku",
      poder: 25000
    }
  ];

  get personajes(){
    return this._personajes;
  }

  agregarNuevoPersonaje(personaje:Personaje):void{
    console.log("Esto es en servicio: ",personaje);
    this._personajes.push(personaje);
  }




}
