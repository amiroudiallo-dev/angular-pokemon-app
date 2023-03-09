import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListPokemonComponent} from "./list-pokemon/list-pokemon.component";
import {DetailsPokemonComponent} from "./details-pokemon/details-pokemon.component";
import {RouterModule, Routes} from "@angular/router";

const pokemonRoutes: Routes = [
    { path: 'pokemons', component: ListPokemonComponent },
    { path: 'pokemon/:id', component: DetailsPokemonComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
      RouterModule.forChild(pokemonRoutes)
  ]
})
export class PokemonModule { }
