import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../../interfaces/personajes.interface';
import { AnimeService } from '../../services/anime.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  //@input hace referencia a un valor del componente padre
 // @Input() personajesHijo:Personaje[] = [];

  personajesHijo:Personaje[] = [];

  constructor(private servicio: AnimeService) {
    this.personajesHijo = servicio.personajes;
  }

  ngOnInit(): void {
  }

}
