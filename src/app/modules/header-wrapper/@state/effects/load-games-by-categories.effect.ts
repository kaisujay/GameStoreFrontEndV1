import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { GameCategoriesService } from '../../services/game-categories.service';
import { 
  HeaderWrapperActionTypes, 
  LoadGamesByCategoriesAction, 
  LoadGamesByCategoriesFailedAction, 
  LoadGamesByCategoriesSuccessAction 
} from '../actions/header-wrapper.action';

@Injectable()
export class LoadGamesByCategoriesEffect {
  public constructor(
    private actions$: Actions,
    private httpService: GameCategoriesService
  ) { }
  
  public loadGamesByCategoriesEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HeaderWrapperActionTypes.LoadGamesByCategories),
      switchMap((_action: LoadGamesByCategoriesAction) => {
        return this.httpService
          .getGameByCategoryName(_action.categoriesName)
          .pipe(
            map(response => {
              return new LoadGamesByCategoriesSuccessAction(response);
            }),
            catchError(_err => of(new LoadGamesByCategoriesFailedAction()))
          );
      })
    )
  );
}