import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { GameActionTypes, LoadGamesAction, LoadGamesFailedAction, LoadGamesSuccessAction } from '../actions/game.action';
import { GameHttpService } from '../../services/game.http.service';

@Injectable()
export class LoadGameListEffect {
  public constructor(
    private actions$: Actions,
    private httpService: GameHttpService
  ) { }
  
  public loadGameListEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GameActionTypes.LoadGames),
      switchMap((_action: LoadGamesAction) => {
        return this.httpService
          .getGamesAll()
          .pipe(
            map(response => {
              return new LoadGamesSuccessAction(response);
            }),
            catchError(_err => of(new LoadGamesFailedAction()))
          );
      })
    )
  );
}