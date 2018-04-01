import { PokedexService } from './pokedex.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public pokemonList: Array<any>;

  constructor(private pokedexService: PokedexService) {}

  ngOnInit() {
    this.pokedexService.getPokemon().subscribe(res => (this.pokemonList = res));
  }
}
