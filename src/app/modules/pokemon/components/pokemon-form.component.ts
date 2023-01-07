import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../models/Pokemon";
import {PokemonService} from "../services/pokemon.service";
import {Router} from "@angular/router";

@Component({
    selector: 'pokemon-form',
    template: `
        <form *ngIf="pokemon" (ngSubmit)="onSubmit()" #pokemonForm="ngForm" xmlns="http://www.w3.org/1999/html">
            <div class="row">
                <div class="col s8 offset-s2">
                    <div class="card-panel">

                        <!-- Pokemon name -->
                        <div class="form-group">
                            <label for="name">Nom</label>
                            <input type="text" class="form-control" id="name"
                                   required
                                   pattern="^[a-zA-Z0-9àéèç]{1,25}$"
                                   [(ngModel)]="pokemon.name" name="name"
                                   #name="ngModel">

                            <div [hidden]="name.valid || name.pristine"
                                 class="card-panel red accent-1">
                                Le nom du pokémon est requis (1-25).
                            </div>
                        </div>

                        <!-- Pokemon hp -->
                        <div class="form-group">
                            <label for="hp">Point de vie</label>
                            <input type="number" class="form-control" id="hp"
                                   required
                                   pattern="^[0-9]{1,3}$"
                                   [(ngModel)]="pokemon.hp" name="hp"
                                   #hp="ngModel">
                            <div [hidden]="hp.valid || hp.pristine"
                                 class="card-panel red accent-1">
                                Les points de vie du pokémon sont compris entre 0 et 999.
                            </div>
                        </div>

                        <!-- Pokemon cp -->
                        <div class="form-group">
                            <label for="cp">Dégâts</label>
                            <input type="number" class="form-control" id="cp"
                                   required
                                   pattern="^[0-9]{1,2}$"
                                   [(ngModel)]="pokemon.cp" name="cp"
                                   #cp="ngModel">
                            <div [hidden]="cp.valid || cp.pristine"
                                 class="card-panel red accent-1">
                                <!--                                 Les dégâts du pokémon sont compris entre 0 et 99.-->
                            </div>
                        </div>

                        <!-- Pokemon types -->
                        <form class="form-group">
                            <label for="types">Types</label>
                            <p *ngFor="let type of types">
                                <label>
                                    <input type="checkbox"
                                           class="filled-in"
                                           id="{{ type }}"
                                           [value]="type"
                                           [checked]="hasType(type)"
                                           [disabled]="!isTypesValid(type)"
                                           (change)="selectType($event, type)"/>
                                    <span [attr.for]="type">
                            <span class="{{ type | pokemonTypeColor }}">
                                {{ type }}
                            </span>
                            </span>
                                </label>
                            </p>
                        </form>

                        <!-- Submit button -->
                        <div class="divider"></div>
                        <div class="section center">
                            <button type="submit"
                                    class="waves-effect waves-light btn"
                                    [disabled]="!pokemonForm.form.valid">
                                Valider
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </form>
        <h3 *ngIf="!pokemon" class="center">Aucun pokémon à éditer...</h3>
    `,
})
export class PokemonFormComponent implements OnInit {
    @Input() pokemon: Pokemon;

    types: string[]

    constructor(private pokemonService: PokemonService, private router: Router) {
    }

    ngOnInit(): void {
        this.types = this.pokemonService.getPokemonTypeList()
    }

    onSubmit() {
        console.log(`${this.pokemon.name} was  soumited`)
        this.router.navigate(['pokemon/', this.pokemon.id])
    }

    hasType(type: string): boolean {
        return this.pokemon.types.includes(type)
    }

    isTypesValid(type: string) {
        return this.types.includes(type)
    }

    selectType($event: Event, type: string) {
        const isChecked = ($event.target as HTMLInputElement).checked
        isChecked ? this.pokemon.types.push(type)
            : this.pokemon.types.splice(this.pokemon.types.indexOf(type), 1)


    }
}
