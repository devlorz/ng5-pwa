import { PokedexService } from './pokedex.service';
import { Component, OnInit } from '@angular/core';
import Pokemon from './Pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public pokemonList: Array<PokemonForList>;
  public searchText: string;
  pokemonData: Array<PokemonForList>;

  constructor(private pokedexService: PokedexService) {}

  ngOnInit() {
    this.pokedexService.getPokemon().subscribe(res => {
      this.pokemonData = res;
      this.pokemonList = res;
    });
  }

  public onSearch(searchText: string) {
    this.pokemonList = this.pokemonData.filter(
      pokemon =>
        pokemon.name.toUpperCase().indexOf(searchText.toUpperCase()) >= 0
    );
  }
}
