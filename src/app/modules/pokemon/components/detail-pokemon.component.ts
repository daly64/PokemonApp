import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Pokemon} from "../models/Pokemon";
import {PokemonService} from "../services/pokemon.service";


@Component({
    selector: 'app-detail-pokemon',
    template: `
        <div *ngIf="pokemon" class="row">
            <div class="col s12 m8 offset-m2">
                <h2 class="header center">{{ pokemon.name }}</h2>
                <div class="card horizontal hoverable">
                    <div class="card-image">
                        <img [src]="pokemon.picture" alt="">
                    </div>
                    <div class="card-stacked">
                        <div class="card-content">
                            <table class="bordered striped">
                                <tbody>
                                <tr>
                                    <td>Nom</td>
                                    <td><strong>{{ pokemon.name }}</strong></td>
                                </tr>
                                <tr>
                                    <td>Points de vie</td>
                                    <td><strong>{{ pokemon.hp }}</strong></td>
                                </tr>
                                <tr>
                                    <td>Dégâts</td>
                                    <td><strong>{{ pokemon.cp }}</strong></td>
                                </tr>
                                <tr>
                                    <td>Types</td>
                                    <td>
                                        <span *ngFor="let type of pokemon.types"
                                              class="{{ type | pokemonTypeColor }}">{{ type }}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Date de création</td>
                                    <td><em>{{ pokemon.created | date:"dd/MM/yyyy" }}</em></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="card-action">
                            <a class="waves-effect waves-orange btn-flat" (click)="goBack()">Retour</a>
                            <a class="waves-effect waves-orange btn-flat" (click)="goEdit()">Edit</a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <h4 *ngIf='!pokemon' class="center">Aucun pokémon à afficher !</h4>

    `,
    styles: []
})
export class DetailPokemonComponent implements OnInit {

    PokemonList: Pokemon[]
    pokemon: Pokemon | undefined

    constructor(private route: ActivatedRoute, private router: Router, private pokemonService: PokemonService,) {
    }

    ngOnInit(): void {
        const pokemonId: string | null = this.route.snapshot.paramMap.get('id')
        if (pokemonId) {
            this.pokemon = this.pokemonService.getpokemonById(+pokemonId)
        }

    }

    goBack() {
        this.router.navigate([`pokemons`])
    }

    goEdit() {
        this.router.navigate([`edit/pokemon/`,this.pokemon?.id])

    }
}
