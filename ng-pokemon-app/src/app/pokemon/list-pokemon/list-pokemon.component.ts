import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../pokemon";
import {POKEMONS} from "../mock-pokemon-list";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [
  ]
})
export class ListPokemonComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;

  constructor(private route: Router) {
  }
  ngOnInit() {
    console.table(this.pokemonList);
  }

  selectPokemon(pokemonId: string) {
    const pokemon: Pokemon | undefined = this.pokemonList.find(pokemon => pokemon.id == + pokemonId);
    if (pokemon)
    {
      console.log(`Vous avez demander le pokemon: ${ pokemon.name }`);
      this.pokemonSelected = pokemon;
    } else
    {
      console.log(`Vous avez demander un pokemon qui n'existe pas..!!`);
      this.pokemonSelected = pokemon;
    }
  }

  /**
   * redirect to the selected pokemon.
   * @param pokemon
   */
  goToPokemon(pokemon: Pokemon) {
    this.route.navigate(['/pokemon', pokemon.id]);
  }
}
