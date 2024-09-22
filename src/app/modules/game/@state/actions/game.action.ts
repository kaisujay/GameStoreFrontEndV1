import { Action } from '@ngrx/store';
import { GameListModel } from '../../models/game-list.model';
import { CreateUpdateGameModel } from '../../models/create-game.model';

export enum GameActionTypes {
    LoadGames = '[Game] Load Games',
    LoadGamesSuccess = '[Game] Load Games Success',
    LoadGamesFailed = '[Game] Load Games Failed',

    LoadOneGameById = '[Game] Load One Game By Id',
    LoadOneGameByIdSuccess = '[Game] Load One Game By Id Success',
    LoadOneGameByIdFailed = '[Game] Load One Game By Id Failed',

    LoadGamesByName = '[Game] Load Games By Name',
    LoadGamesByNameSuccess = '[Game] Load Games By Name Success',
    LoadGamesByNameFailed = '[Game] Load Games By Name Failed',

    CreateGame = '[Game] Create Game',
    CreateGameSuccess = '[Game] Create Game Success',
    CreateGameFailed = '[Game] Create Game Failed',

    UpdateGame = '[Game] Update Game',
    UpdateGameSuccess = '[Game] Update Game Success',
    UpdateGameFailed = '[Game] Update Game Failed',
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

export class LoadOneGameByIdAction implements Action {
    public readonly type = GameActionTypes.LoadOneGameById;
    public constructor(public id: string) { }
}

export class LoadOneGameByIdSuccessAction implements Action {
    public readonly type = GameActionTypes.LoadOneGameByIdSuccess;
    public constructor(public payload: GameListModel) { }
}

export class LoadOneGameByIdFailedAction implements Action {
    public readonly type = GameActionTypes.LoadOneGameByIdFailed;
    public constructor() { }
}

export class LoadGamesByNameAction implements Action {
    public readonly type = GameActionTypes.LoadGamesByName;
    public constructor(public name: string) { }
}

export class LoadGamesByNameSuccessAction implements Action {
    public readonly type = GameActionTypes.LoadGamesByNameSuccess;
    public constructor(public payload: GameListModel[]) { }
}

export class LoadGamesByNameFailedAction implements Action {
    public readonly type = GameActionTypes.LoadGamesByNameFailed;
    public constructor() { }
}

export class CreateGameAction implements Action {
    public readonly type = GameActionTypes.CreateGame;
    public constructor(public payload: CreateUpdateGameModel) { }
}

export class CreateGameSuccessAction implements Action {
    public readonly type = GameActionTypes.CreateGameSuccess;
    public constructor(public payload: string) { }
}

export class CreateGameFailedAction implements Action {
    public readonly type = GameActionTypes.CreateGameFailed;
    public constructor() { }
}

export class UpdateGameAction implements Action {
    public readonly type = GameActionTypes.UpdateGame;
    public constructor(public payload:{
        id: string,
        createGame: CreateUpdateGameModel
    }) { }
}

export class UpdateGameSuccessAction implements Action {
    public readonly type = GameActionTypes.UpdateGameSuccess;
    public constructor(public payload: GameListModel) { }
}

export class UpdateGameFailedAction implements Action {
    public readonly type = GameActionTypes.UpdateGameFailed;
    public constructor() { }
}

export type GameActionsUnion =
    | LoadGamesAction
    | LoadGamesSuccessAction
    | LoadGamesFailedAction
    | LoadOneGameByIdAction
    | LoadOneGameByIdSuccessAction
    | LoadOneGameByIdFailedAction
    | LoadGamesByNameAction
    | LoadGamesByNameSuccessAction
    | LoadGamesByNameFailedAction
    | CreateGameAction
    | CreateGameSuccessAction
    | CreateGameFailedAction
    | UpdateGameAction
    | UpdateGameSuccessAction
    | UpdateGameFailedAction
    ;