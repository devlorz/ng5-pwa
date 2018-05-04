import { CapitalizePipe } from './capitalize.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { AppMaterialModule } from './app-material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PokedexService } from './pokedex.service';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { LayoutModule } from '@angular/cdk/layout';
import { PokemonDetailDialogComponent } from './pokemon-detail-dialog/pokemon-detail-dialog.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  entryComponents: [PokemonDetailDialogComponent],
  declarations: [
    AppComponent,
    CapitalizePipe,
    PokemonCardComponent,
    PokemonDetailDialogComponent,
    PokemonListComponent,
    SearchBarComponent,
    SidenavComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppMaterialModule,
    HttpClientModule,
    LayoutModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [PokedexService],
  bootstrap: [AppComponent]
})
export class AppModule {}
