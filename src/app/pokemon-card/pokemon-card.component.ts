import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PokemonDetailDialogComponent } from '../pokemon-detail-dialog/pokemon-detail-dialog.component';
import { PokedexService } from '../pokedex.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon: PokemonDetail;
  backgroundClass: string;

  constructor(
    public dialog: MatDialog,
    private pokedexService: PokedexService
  ) {}

  ngOnInit() {}

  openDialog() {
    this.dialog.open(PokemonDetailDialogComponent, {
      width: '100%',
      height: '100%',
      hasBackdrop: true,
      data: this.pokemon
    });
  }

  public getColor() {
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
