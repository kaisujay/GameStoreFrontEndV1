import { Action } from '@ngrx/store';
import { GameListModel } from '../../models/game-list.model';

export enum GameActionTypes {
    LoadGames = '[Game] Load Games',
    LoadGamesSuccess = '[Game] Load Games Success',
    LoadGamesFailed = '[Game] Load Games Failed',
}
export class LoadGamesAction implements Action {
    public readonly type = GameActionTypes.LoadGames;
    public constructor() { }
}

export class LoadGamesSuccessAction implements Action {
    public readonly type = GameActionTypes.LoadGamesSuccess;
    public constructor(public payload: GameListModel[]) { }
}

export class LoadGamesFailedAction implements Action {
    public readonly type = GameActionTypes.LoadGamesFailed;
    public constructor() { }
}

export type GameActionsUnion =
    | LoadGamesAction
    | LoadGamesSuccessAction
    | LoadGamesFailedAction
    ;