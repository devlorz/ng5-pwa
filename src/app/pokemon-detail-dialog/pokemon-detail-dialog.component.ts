import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PokedexService } from '../pokedex.service';

@Component({
  selector: 'app-pokemon-detail-dialog',
  templateUrl: './pokemon-detail-dialog.component.html',
  styleUrls: ['./pokemon-detail-dialog.component.css']
})
export class PokemonDetailDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public pokemon: PokemonDetail,
    private pokedexService: PokedexService
  ) {}

  ngOnInit() {}

  getColor(type: string) {
    return this.pokedexService.getColorCode(type);
  }

  getTitleColor() {
    return this.pokedexService.getTitleColorCode(this.pokemon.types[0]);
  }

  public getBackgroundColor() {
    if (this.pokemon.types.length > 1) {
      return '';
    } else {
      const type = this.pokemon.types[0];
      return this.pokedexService.getColorCode(type);
    }
  }

  public getBackground() {
    if (this.pokemon.types.length < 2) {
      return '';
    } else {
      const codeList = this.pokemon.types.map((colorName: string) =>
        this.pokedexService.getColorCode(colorName)
      );
      const gradient = codeList.reduce((acc, cur) => {
        return `${acc}, ${cur} 50%`;
      }, '');
      const linearGradient = `linear-gradient(90deg${gradient})`;
      return linearGradient;
    }
  }
}
