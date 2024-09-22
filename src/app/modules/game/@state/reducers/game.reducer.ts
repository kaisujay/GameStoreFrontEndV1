import { createFeatureSelector } from "@ngrx/store";
import { GameListModel } from "../../models/game-list.model"
import { GameActionsUnion, GameActionTypes } from "../actions/game.action";

export interface GameState {
    allGames: {
        data: GameListModel[];
        isLoading: boolean;
        isLoaded: boolean;
        isError: boolean;
    }
}

export const initialState: GameState = {
    allGames: {
        data: [],
        isLoading: false,
        isLoaded: false,
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

        default:
            return state;
    }
}

export const getGameState = createFeatureSelector<GameState>('gameState');