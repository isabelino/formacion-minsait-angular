import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AcumuladorModule } from './acumuladores/acumulador.module';
import { AnimeModule } from './anime/anime.module';
import { AppComponent } from './app.component';
import { CalculadoraModule } from './calculadora/calculadora.module';
import { HeroesModule } from './heroes/heroes.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    AcumuladorModule,
    AnimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
