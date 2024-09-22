import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameListComponent } from './game-list/game-list.component';
import { GameHttpService } from './services/game.http.service';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LoadGameListEffect } from './@state/effects/load-game-list.effect';
import { GameStateReducer } from './@state/reducers/game.reducer';


@NgModule({
  declarations: [
    GameListComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('gameState', GameStateReducer),
    EffectsModule.forFeature([
      LoadGameListEffect
    ]),
    GameRoutingModule
  ],
  providers:[
    GameHttpService, 
    provideHttpClient()  // This has replaced "HttpClientModule"
  ]
})
export class GameModule { }
