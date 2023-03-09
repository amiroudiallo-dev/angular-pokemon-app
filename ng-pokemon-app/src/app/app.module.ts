import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BorderCardDirective} from './pokemon/border-card.directive';
import {PokemonTypeColorPipe} from './pokemon/pokemon-type-color.pipe';
import {ListPokemonComponent} from './pokemon/list-pokemon/list-pokemon.component';
import {DetailsPokemonComponent} from './pokemon/details-pokemon/details-pokemon.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {PokemonModule} from "./pokemon/pokemon.module";

@NgModule({
  declarations: [
    AppComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    ListPokemonComponent,
    DetailsPokemonComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    PokemonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
