import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pokemon-detail-dialog',
  templateUrl: './pokemon-detail-dialog.component.html',
  styleUrls: ['./pokemon-detail-dialog.component.css']
})
export class PokemonDetailDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public pokemon: PokemonDetail) {}

  ngOnInit() {
    console.log('pokemon : ', this.pokemon);
  }
}
