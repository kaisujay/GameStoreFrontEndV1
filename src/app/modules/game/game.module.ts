import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameListComponent } from './game-list/game-list.component';
import { GameHttpService } from './services/game.http.service';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    GameListComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule
  ],
  providers:[
    GameHttpService, 
    provideHttpClient()  // This has replaced "HttpClientModule"
  ]
})
export class GameModule { }
