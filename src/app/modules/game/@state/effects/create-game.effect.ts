import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { 
  GameActionTypes, 
  CreateGameAction, 
  CreateGameFailedAction, 
  CreateGameSuccessAction 
} from '../actions/game.action';
import { GameHttpService } from '../../services/game.http.service';

@Injectable()
export class CreateGameEffect {
  public constructor(
    private actions$: Actions,
    private httpService: GameHttpService
  ) { }
  
  public createGameEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GameActionTypes.CreateGame),
      switchMap((action: CreateGameAction) => {
        return this.httpService
          .createGame(action.payload)
          .pipe(
            map(response => {
              return new CreateGameSuccessAction(response);
            }),
            catchError(_err => of(new CreateGameFailedAction()))
          );
      })
    )
  );
}