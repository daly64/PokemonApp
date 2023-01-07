import {Injectable} from '@angular/core';
import {Pokemon} from "../models/Pokemon";
import {POKEMONS} from "../data/mock-pokemons";

@Injectable()
export class PokemonService {

    getPokemonList(): Pokemon[] {
        return POKEMONS
    }

    getpokemonById(pokemonId: number): Pokemon | undefined {
        return POKEMONS.find(pokemon => pokemon.id === pokemonId)
    }

    getPokemonTypeList(): string[] {
        return ['plante', 'feu', 'eau', 'insecte', 'normal', 'electrik', 'poison', 'fee', 'vol', 'combat', 'psy']
    }


}
