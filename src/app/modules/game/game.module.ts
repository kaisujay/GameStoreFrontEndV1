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
import { LoadOneGameByIdEffect } from './@state/effects/load-game-by-id.effect';
import { CreateGameEffect } from './@state/effects/create-game.effect';
import { LoadGamesByNameEffect } from './@state/effects/load-games-by-name.effect';
import { UpdateGameEffect } from './@state/effects/update-game.effect';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';


@NgModule({
  declarations: [
    GameListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InputSwitchModule,
    FormsModule,
    StoreModule.forFeature('gameState', GameStateReducer),
    EffectsModule.forFeature([
      LoadGameListEffect,
      LoadOneGameByIdEffect,
      CreateGameEffect,
      LoadGamesByNameEffect,
      UpdateGameEffect
    ]),
    GameRoutingModule
  ],
  providers:[
    GameHttpService, 
    provideHttpClient()  // This has replaced "HttpClientModule"
  ]
})
export class GameModule { }
