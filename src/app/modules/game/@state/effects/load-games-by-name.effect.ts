import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { 
  GameActionTypes, 
  LoadGamesByNameAction, 
  LoadGamesByNameFailedAction, 
  LoadGamesByNameSuccessAction 
} from '../actions/game.action';
import { GameHttpService } from '../../services/game.http.service';

@Injectable()
export class LoadGamesByNameEffect {
  public constructor(
    private actions$: Actions,
    private httpService: GameHttpService
  ) { }
  
  public LoadGamesByNameEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GameActionTypes.LoadGamesByName),
      switchMap((action: LoadGamesByNameAction) => {
        return this.httpService
          .getGamesByName(action.name)
          .pipe(
            map(response => {
              return new LoadGamesByNameSuccessAction(response);
            }),
            catchError(_err => of(new LoadGamesByNameFailedAction()))
          );
      })
    )
  );
}