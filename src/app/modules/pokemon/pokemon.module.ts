import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListPokemonComponent} from "./components/list-pokemon.component";
import {DetailPokemonComponent} from "./components/detail-pokemon.component";
import {RouterModule, Routes} from "@angular/router";
import {PokemonTypeColorPipe} from "./pipes/pokemon-type-color.pipe";
import {BorderCardDirective} from "./directives/border-card.directive";
import {PokemonService} from "./services/pokemon.service";
import {FormsModule} from "@angular/forms";
import {PokemonFormComponent} from './components/pokemon-form.component';
import {EditPokemonComponent} from './components/edit-pokemon.component';

// Les routes du module Pokémon
const pokemonsRoutes: Routes = [
    {path: 'pokemon/:id', component: DetailPokemonComponent},
    {path: 'edit/pokemon/:id', component: EditPokemonComponent},
    {path: 'pokemons', component: ListPokemonComponent},
];

@NgModule({
    declarations: [
        BorderCardDirective,
        PokemonTypeColorPipe,
        ListPokemonComponent,
        DetailPokemonComponent,
        PokemonFormComponent,
        EditPokemonComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild(pokemonsRoutes)
    ],
    exports: [RouterModule],
    providers: [PokemonService]
})
export class PokemonModule {
}
