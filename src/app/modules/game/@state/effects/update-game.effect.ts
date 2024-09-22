import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { 
  GameActionTypes, 
  UpdateGameAction, 
  UpdateGameFailedAction, 
  UpdateGameSuccessAction 
} from '../actions/game.action';
import { GameHttpService } from '../../services/game.http.service';

@Injectable()
export class UpdateGameEffect {
  public constructor(
    private actions$: Actions,
    private httpService: GameHttpService
  ) { }
  
  public updateGameEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GameActionTypes.UpdateGame),
      switchMap((action: UpdateGameAction) => {
        return this.httpService
          .updateGame(action.payload.id, action.payload.createGame)
          .pipe(
            map(response => {
              return new UpdateGameSuccessAction(response);
            }),
            catchError(_err => of(new UpdateGameFailedAction()))
          );
      })
    )
  );
}