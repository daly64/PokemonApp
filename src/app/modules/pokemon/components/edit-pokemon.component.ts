import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../models/Pokemon";
import {PokemonService} from "../services/pokemon.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-edit-pokemon',
    template: `
        <h2 class="center">editer  {{pokemon?.name}}</h2>
        <div *ngIf="pokemon" class="center"><img [src]="pokemon.picture" alt=""></div>
        <pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></pokemon-form>
    `,
    styles: []
})
export class EditPokemonComponent implements OnInit {
    pokemon: Pokemon | undefined

    constructor(private pokemonService: PokemonService, private activeRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        const pokemonId: string | null = this.activeRoute.snapshot.paramMap.get('id')
        this.pokemon = pokemonId ? this.pokemonService.getpokemonById(+pokemonId) : undefined
    }


}
