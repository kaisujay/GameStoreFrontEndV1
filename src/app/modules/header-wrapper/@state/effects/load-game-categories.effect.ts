import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { GameCategoriesService } from '../../services/game-categories.service';
import { HeaderWrapperActionTypes, LoadGameCategoriesAction, LoadGameCategoriesFailedAction, LoadGameCategoriesSuccessAction } from '../actions/header-wrapper.action';

@Injectable()
export class LoadGameCategoriesEffect {
  public constructor(
    private actions$: Actions,
    private httpService: GameCategoriesService
  ) { }
  
  public loadGameCategoriesEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HeaderWrapperActionTypes.LoadGameCategories),
      switchMap((_action: LoadGameCategoriesAction) => {
        return this.httpService
          .getGameCatagoriesAll()
          .pipe(
            map(response => {
              return new LoadGameCategoriesSuccessAction(response);
            }),
            catchError(_err => of(new LoadGameCategoriesFailedAction()))
          );
      })
    )
  );
}