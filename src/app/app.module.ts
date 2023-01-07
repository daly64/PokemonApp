import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './modules/app-routing.module';
import {RouterModule} from "@angular/router";
import {PageNotFoundComponent} from './page-not-found.component';
import {PokemonModule} from "./modules/pokemon/pokemon.module";


@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent,
    ],
    imports: [
        PokemonModule,
        BrowserModule,
        AppRoutingModule,
        RouterModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
