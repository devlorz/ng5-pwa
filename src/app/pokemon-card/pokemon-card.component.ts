import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon: PokemonDetail;
  backgroundClass: string;

  constructor() {}

  ngOnInit() {}

  public getColor() {
    if (this.pokemon.types.length > 1) {
      return '';
    } else {
      const type = this.pokemon.types[0];
      return this.getColorCode(type);
    }
  }

  public getBackground() {
    if (this.pokemon.types.length < 2) {
      return '';
    } else {
      const codeList = this.pokemon.types.map((colorName: string) =>
        this.getColorCode(colorName)
      );
      const gradient = codeList.reduce((acc, cur) => {
        return `${acc}, ${cur} 50%`;
      }, '');
      const linearGradient = `linear-gradient(90deg${gradient})`;
      return linearGradient;
    }
  }

  private getColorCode(colorName: string): string {
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
}
