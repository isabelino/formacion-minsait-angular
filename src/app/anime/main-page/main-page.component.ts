import { Component } from '@angular/core';
import { Personaje } from '../interfaces/personajes.interface';
import { AnimeService } from '../services/anime.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {

  constructor(private servicio:AnimeService){

  }

  personajes:Personaje[] = [
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

  agregarNuevoPersonaje(personaje:Personaje):void{
    console.log("Esto viene del hijo agregar: ",personaje);
    this.personajes.push(personaje);

  }

}
