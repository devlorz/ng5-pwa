import { PokedexService } from './pokedex.service';
import { Component, OnInit } from '@angular/core';
import Pokemon from './model/Pokemon';
import { BreakpointObserver } from '@angular/cdk/layout';
import { pluck } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public pokemonList: Array<PokemonDetail>;
  public searchText: string;
  public isSmallScreen: boolean;
  private pokemonData: Array<PokemonDetail>;

  constructor(
    private pokedexService: PokedexService,
    private breakPointObserver: BreakpointObserver
  ) {}

  ngOnInit() {
    this.breakPointObserver
      .observe(['(max-width: 991px)'])
      .pipe(pluck('matches'))
      .subscribe((isSmall: boolean) => (this.isSmallScreen = isSmall));

    this.pokedexService.getPokemon().subscribe(
      res => {
        this.pokemonData = res;
        this.pokemonList = res;
      },
      error => {
        this.pokemonData = [];
        this.pokemonList = [];
      }
    );
  }

  get sideNavMode() {
    return this.isSmallScreen ? 'over' : 'side';
  }

  public onSearch(searchText: string) {
    this.pokemonList = this.pokemonData.filter(
      pokemon =>
        pokemon.name.toUpperCase().indexOf(searchText.toUpperCase()) >= 0
    );
  }
}
