import { Component, OnInit } from '@angular/core';
import { GameHttpService } from '../services/game.http.service';
import { select, Store } from '@ngrx/store';
import { GameState, getGameState } from '../@state/reducers/game.reducer';
import { Observable } from 'rxjs';
import { LoadGamesAction } from '../@state/actions/game.action';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  public gameState$: Observable<GameState>;
  
  public constructor(private store$: Store){}
  
  public ngOnInit(): void {
    this.store$.dispatch(new LoadGamesAction());

    this.gameState$ = this.store$.pipe(select(getGameState));
    this.gameState$.subscribe(data => {
      if (data.allGames.isLoaded){
        console.log(data.allGames.data);
      }
    })
  }
}
