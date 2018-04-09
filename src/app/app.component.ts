import { PokedexService } from './pokedex.service';
import { Component, OnInit } from '@angular/core';
import Pokemon from './model/Pokemon';

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
    const saveData = localStorage.getItem('pokemonList');
    if (saveData) {
      const pokemonSaveData = JSON.parse(saveData);
      this.pokemonData = pokemonSaveData;
      this.pokemonList = pokemonSaveData;
    } else {
      this.pokedexService.getPokemon().subscribe(res => {
        this.pokemonData = res;
        this.pokemonList = res;
        localStorage.setItem('pokemonList', JSON.stringify(res));
      });
    }
  }

  public onSearch(searchText: string) {
    this.pokemonList = this.pokemonData.filter(
      pokemon =>
        pokemon.name.toUpperCase().indexOf(searchText.toUpperCase()) >= 0
    );
  }
}
