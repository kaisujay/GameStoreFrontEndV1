import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { 
  GameActionTypes, 
  LoadOneGameByIdAction, 
  LoadOneGameByIdFailedAction, 
  LoadOneGameByIdSuccessAction 
} from '../actions/game.action';
import { GameHttpService } from '../../services/game.http.service';

@Injectable()
export class LoadOneGameByIdEffect {
  public constructor(
    private actions$: Actions,
    private httpService: GameHttpService
  ) { }
  
  public loadOneGameByIdEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GameActionTypes.LoadOneGameById),
      switchMap((action: LoadOneGameByIdAction) => {
        return this.httpService
          .getOneById(action.id)
          .pipe(
            map(response => {
              return new LoadOneGameByIdSuccessAction(response);
            }),
            catchError(_err => of(new LoadOneGameByIdFailedAction()))
          );
      })
    )
  );
}