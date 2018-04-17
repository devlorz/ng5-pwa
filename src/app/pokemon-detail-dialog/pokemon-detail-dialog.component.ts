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

  ngOnInit() {
    console.log('pokemon : ', this.pokemon);
  }

  getColor(type: string) {
    return this.pokedexService.getColorCode(type);
  }

  getTitleColor() {
    return this.pokedexService.getColorCode(this.pokemon.types[0]);
  }
}
