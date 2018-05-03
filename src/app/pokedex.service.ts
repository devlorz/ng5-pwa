import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import Pokemon from './model/Pokemon';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PokedexService {
  private baseUrl = 'https://ng5-pwa-a853e.firebaseio.com/pokemon.json';
  private baseSpriteUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  constructor(private http: HttpClient) {}

  getPokemon(): Observable<Array<PokemonDetail>> {
    return this.http.get(`${this.baseUrl}`).pipe(
      map((pokemonList: Array<Pokemon>) => {
        return pokemonList.map((pokemon: Pokemon) => ({
          name: pokemon.name,
          sprite: `${this.baseSpriteUrl}${pokemon.id}.png`,
          id: pokemon.id,
          types: pokemon.types.sort(),
          description: pokemon.description
        }));
      })
    );
  }

  getColorCode(colorName: string): string {
    switch (colorName) {
      case 'grass':
        return '#78C850';
      case 'fire':
        return '#F08030';
      case 'water':
        return '#6890F0';
      case 'bug':
        return '#A8B820';
      case 'poison':
        return '#A040A0';
      case 'flying':
        return '#A890F0';
      case 'normal':
        return '#A8A878';
      case 'electric':
        return '#F8D030';
      case 'ground':
        return '#E0C068';
      case 'fairy':
        return '#EE99AC';
      case 'fighting':
        return '#C03028';
      case 'psychic':
        return '#F85888';
      case 'steel':
        return '#B8B8D0';
      case 'ice':
        return '#98D8D8';
      case 'rock':
        return '#B8A038';
      case 'dragon':
        return '#7038F8';
      case 'ghost':
        return '#705898';
      default:
        return '#fff';
    }
  }

  getTitleColorCode(colorName: string): string {
    switch (colorName) {
      case 'grass':
        return 'rgb(76, 140, 44)';
      case 'fire':
        return 'rgb(171, 79, 13)';
      case 'water':
        return 'rgb(20, 75, 204)';
      case 'bug':
        return 'rgb(107, 117, 21)';
      case 'poison':
        return 'rgb(106, 42, 106)';
      case 'flying':
        return 'rgb(77, 30, 220)';
      case 'normal':
        return 'rgb(112, 112, 72)';
      case 'electric':
        return 'rgb(187, 151, 7)';
      case 'ground':
        return 'rgb(178, 140, 36)';
      case 'fairy':
        return 'rgb(218, 37, 76)';
      case 'fighting':
        return 'rgb(123, 30, 25)';
      case 'psychic':
        return 'rgb(211, 9, 69)';
      case 'steel':
        return '#B8B8D0';
      case 'ice':
        return 'rgb(66, 174, 174)';
      case 'rock':
        return 'rgb(121, 106, 37)';
      case 'dragon':
        return 'rgb(62, 7, 192)';
      case 'ghost':
        return 'rgb(74, 58, 100)';
      default:
        return '#fff';
    }
  }
}
