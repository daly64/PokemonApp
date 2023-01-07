import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../models/Pokemon";
import {Router} from "@angular/router";
import {PokemonService} from "../services/pokemon.service";

@Component({
    selector: 'app-list-pokemon',
    template: `
        <div class="container">

            <div class="row">
                <div class="col s6 m4" *ngFor="let pokemon of PokemonList">
                    <div class="card horizontal" appBorderCard (click)="goToPokemon(pokemon)">
                        <div class="card-image">
                            <img [src]="pokemon.picture" alt="">
                        </div>

                        <div class="card-stacked">
                            <div class="card-content">
                                <p>{{pokemon.name}}</p>
                                <p><small>{{pokemon.created | date : 'dd/MM/YYYY'}}</small></p>
                                <span *ngFor="let type of pokemon.types" class="{{type | pokemonTypeColor}}">
                            {{type}}
                        </span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    `,
    styles: []
})
export class ListPokemonComponent implements OnInit {
    PokemonList: Pokemon[]

    constructor(private router: Router, private pokemonService: PokemonService,) {
    }

    goToPokemon(pokemon: Pokemon) {
        this.router.navigate(['pokemon', pokemon.id])
    }

    ngOnInit(): void {
        this.PokemonList = this.pokemonService.getPokemonList()
    }
}
