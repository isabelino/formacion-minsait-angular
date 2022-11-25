import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personajes.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  //@Output() nos sirve para emitir eventos desde el componente hijo al componente padre

  @Output() unNuevoPersonaje:EventEmitter<Personaje> = new EventEmitter();

  nuevo: Personaje ={
    nombre: "",
    poder: 0
  };

  agregar():void{
    console.log(this.nuevo);
    //this.personajes.push(this.nuevo);
    this.unNuevoPersonaje.emit(this.nuevo);

    this.nuevo ={
      nombre: "",
      poder: 0
    };

  }

  constructor() { }

  ngOnInit(): void {
  }

}
