import { createFeatureSelector, createSelector } from "@ngrx/store";
import { GameCategoriesModel } from "../../models/header-wrapper.model";
import { HeaderWrapperActionsUnion, HeaderWrapperActionTypes } from "../actions/header-wrapper.action";

export interface HeaderWrapperState {
    allGameCategories: {
        data: GameCategoriesModel[];
        isLoading: boolean;
        isLoaded: boolean;
        isError: boolean;
    }
}

export const initialState: HeaderWrapperState = {
    allGameCategories: {
        data: [],
        isLoading: false,
        isLoaded: false,
        isError: false
    }
}

export function HeaderWrapperStateReducer(state: HeaderWrapperState = initialState, action: HeaderWrapperActionsUnion): HeaderWrapperState {
    switch (action.type) {

        case HeaderWrapperActionTypes.LoadGameCategories:
            return {
                ...state,
                allGameCategories: {
                    ...state.allGameCategories,
                    isLoading: true,
                    isLoaded: false,
                    isError: false
                }
            };

        case HeaderWrapperActionTypes.LoadGameCategoriesSuccess:
            return {
                ...state,
                allGameCategories: {
                    ...state.allGameCategories,
                    data: action.payload,
                    isLoading: false,
                    isLoaded: true,
                    isError: false
                }
            };

        case HeaderWrapperActionTypes.LoadGameCategoriesFailed:
            return {
                ...state,
                allGameCategories: {
                    ...state.allGameCategories,
                    isLoading: false,
                    isLoaded: false,
                    isError: true
                }
            };

        default:
            return state;
    }
}

export const getHeaderWrapperState = createFeatureSelector<HeaderWrapperState>('headerWrapperState');

export const getGameCategories = createSelector(getHeaderWrapperState, state => state.allGameCategories.data);