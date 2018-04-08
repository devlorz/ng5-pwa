import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import Pokemon from './model/Pokemon';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PokedexService {
  private baseUrl = 'https://ng-pokedex-f8bf4.firebaseio.com/pokemon.json';
  private baseSpriteUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  constructor(private http: HttpClient) {}

  getPokemon(): Observable<Array<PokemonForList>> {
    return this.http.get(`${this.baseUrl}`).pipe(
      map((pokemonList: Array<Pokemon>) => {
        return pokemonList.map((pokemon: Pokemon) => ({
          name: pokemon.name,
          sprite: `${this.baseSpriteUrl}${pokemon.id}.png`,
          id: pokemon.id
        }));
      })
    );
  }
}
