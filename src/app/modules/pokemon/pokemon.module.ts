import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListPokemonComponent} from "./components/list-pokemon.component";
import {DetailPokemonComponent} from "./components/detail-pokemon.component";
import {RouterModule, Routes} from "@angular/router";
import {PokemonTypeColorPipe} from "./pipes/pokemon-type-color.pipe";
import {BorderCardDirective} from "./directives/border-card.directive";
import {PokemonService} from "./services/pokemon.service";

// Les routes du module Pokémon
const pokemonsRoutes: Routes = [
    {path: 'pokemons', component: ListPokemonComponent},
    {path: 'pokemon/:id', component: DetailPokemonComponent},
];

@NgModule({
    declarations: [
        BorderCardDirective,
        PokemonTypeColorPipe,
        ListPokemonComponent,
        DetailPokemonComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(pokemonsRoutes)
    ],
    exports: [RouterModule],
    providers:[PokemonService]
})
export class PokemonModule {
}
