import { createFeatureSelector } from "@ngrx/store";
import { GameListModel } from "../../models/game-list.model"
import { GameActionsUnion, GameActionTypes } from "../actions/game.action";

export interface GameState {
    allGames: {
        data: GameListModel[];
        isLoading: boolean;
        isLoaded: boolean;
        isError: boolean;
    },
    gameById: {
        data: GameListModel;
        isLoading: boolean;
        isLoaded: boolean;
        isError: boolean;
    }
    gamesByName: {
        data: GameListModel[];
        isLoading: boolean;
        isLoaded: boolean;
        isError: boolean;
    },
    createGame: {
        data: string;
        isSaving: boolean;
        isSaved: boolean;
        isError: boolean;
    },
    updateGame: {
        data: GameListModel;
        isSaving: boolean;
        isSaved: boolean;
        isError: boolean;
    }
}

export const initialState: GameState = {
    allGames: {
        data: [],
        isLoading: false,
        isLoaded: false,
        isError: false
    },
    gameById: {
        data: null,
        isLoading: false,
        isLoaded: false,
        isError: false
    },
    gamesByName: {
        data: [],
        isLoading: false,
        isLoaded: false,
        isError: false
    },
    createGame: {
        data: null,
        isSaving: false,
        isSaved: false,
        isError: false
    },
    updateGame: {
        data: null,
        isSaving: false,
        isSaved: false,
        isError: false
    }
}

export function GameStateReducer(state: GameState = initialState, action: GameActionsUnion): GameState {
    switch (action.type) {

        case GameActionTypes.LoadGames:
            return {
                ...state,
                allGames: {
                    ...state.allGames,
                    isLoading: true,
                    isLoaded: false,
                    isError: false
                }
            };

        case GameActionTypes.LoadGamesSuccess:
            return {
                ...state,
                allGames: {
                    ...state.allGames,
                    data: action.payload,
                    isLoading: false,
                    isLoaded: true,
                    isError: false
                }
            };

        case GameActionTypes.LoadGamesFailed:
            return {
                ...state,
                allGames: {
                    ...state.allGames,
                    isLoading: false,
                    isLoaded: false,
                    isError: true
                }
            };

        case GameActionTypes.LoadOneGameById:
            return {
                ...state,
                gameById: {
                    ...state.gameById,
                    isLoading: true,
                    isLoaded: false,
                    isError: false
                }
            };

        case GameActionTypes.LoadOneGameByIdSuccess:
            return {
                ...state,
                gameById: {
                    ...state.gameById,
                    data: action.payload,
                    isLoading: false,
                    isLoaded: true,
                    isError: false
                }
            };

        case GameActionTypes.LoadOneGameByIdFailed:
            return {
                ...state,
                gameById: {
                    ...state.gameById,
                    isLoading: false,
                    isLoaded: false,
                    isError: true
                }
            };

        case GameActionTypes.LoadGamesByName:
            return {
                ...state,
                gamesByName: {
                    ...state.gamesByName,
                    isLoading: true,
                    isLoaded: false,
                    isError: false
                }
            };

        case GameActionTypes.LoadGamesByNameSuccess:
            return {
                ...state,
                gamesByName: {
                    ...state.gamesByName,
                    data: action.payload,
                    isLoading: false,
                    isLoaded: true,
                    isError: false
                }
            };

        case GameActionTypes.LoadGamesByNameFailed:
            return {
                ...state,
                gamesByName: {
                    ...state.gamesByName,
                    isLoading: false,
                    isLoaded: false,
                    isError: true
                }
            };

        case GameActionTypes.CreateGame:
            return {
                ...state,
                createGame: {
                    ...state.createGame,
                    isSaving: true,
                    isSaved: false,
                    isError: false
                }
            };

        case GameActionTypes.CreateGameSuccess:
            return {
                ...state,
                createGame: {
                    ...state.createGame,
                    data: action.payload,
                    isSaving: true,
                    isSaved: false,
                    isError: false
                }
            };

        case GameActionTypes.CreateGameFailed:
            return {
                ...state,
                createGame: {
                    ...state.createGame,
                    isSaving: false,
                    isSaved: false,
                    isError: true
                }
            };

        case GameActionTypes.UpdateGame:
            return {
                ...state,
                updateGame: {
                    ...state.updateGame,
                    isSaving: true,
                    isSaved: false,
                    isError: false
                }
            };

        case GameActionTypes.UpdateGameSuccess:
            return {
                ...state,
                updateGame: {
                    ...state.updateGame,
                    data: action.payload,
                    isSaving: true,
                    isSaved: false,
                    isError: false
                }
            };

        case GameActionTypes.UpdateGameFailed:
            return {
                ...state,
                updateGame: {
                    ...state.updateGame,
                    isSaving: false,
                    isSaved: false,
                    isError: true
                }
            };
    
    
        default:
            return state;
    }
}

export const getGameState = createFeatureSelector<GameState>('gameState');