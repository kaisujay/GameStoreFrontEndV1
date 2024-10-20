import { Action } from '@ngrx/store';
import { GameCategoriesModel } from '../../models/header-wrapper.model';

export enum HeaderWrapperActionTypes {
    LoadGameCategories = '[Header-Wrapper] Load Game Categories',
    LoadGameCategoriesSuccess = '[Header-Wrapper] Load Game Categories Success',
    LoadGameCategoriesFailed = '[Header-Wrapper] Load Game Categories Failed',
}

export class LoadGameCategoriesAction implements Action {
    public readonly type = HeaderWrapperActionTypes.LoadGameCategories;
    public constructor() { }
}

export class LoadGameCategoriesSuccessAction implements Action {
    public readonly type = HeaderWrapperActionTypes.LoadGameCategoriesSuccess;
    public constructor(public payload: GameCategoriesModel[]) { }
}

export class LoadGameCategoriesFailedAction implements Action {
    public readonly type = HeaderWrapperActionTypes.LoadGameCategoriesFailed;
    public constructor() { }
}

export type HeaderWrapperActionsUnion =
    | LoadGameCategoriesAction
    | LoadGameCategoriesSuccessAction
    | LoadGameCategoriesFailedAction
    ;