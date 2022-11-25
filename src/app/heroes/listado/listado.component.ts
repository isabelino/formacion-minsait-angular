import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  heroes:string[] =["Spiderman","Ironman","Thor","Hulk","Atman","Capitan America"];
  heroeBorrado:any;

  heroesBorrados:string[]=[];

  borrarHeroe(){
    this.heroeBorrado = this.heroes.pop();
    this.heroesBorrados.push(this.heroeBorrado);
  }
}
