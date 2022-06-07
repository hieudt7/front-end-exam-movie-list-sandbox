import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType, Action } from '../actionTypes';
import { api } from '../../config/common';
export const getPopularMovie = (page:number) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.IS_LOADING_ACTION
        });

        try {
            const { data } = await axios.get(`${api.apiUrl}/movie/popular?api_key=${api.apiKey}&page=${page}`);
            dispatch({
                type: ActionType.GET_POPULAR_MOVIE_SUCCESS,
                payload: data
            });

        } catch (err) {
            dispatch({
                type: ActionType.GET_POPULAR_MOVIE_FAIL,
                payload: err.message
            });
        }
    }
}
export const searchMovie = (key: string,page:number) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.IS_LOADING_ACTION
        });

        try {
            const { data } = await axios.get(`${api.apiUrl}/search/movie?api_key=${api.apiKey}&query=${key}&page=${page}`);
            dispatch({
                type: ActionType.GET_MOVIE_SEARCH_SUCCESS,
                payload: data
            });

        } catch (err) {
            dispatch({
                type: ActionType.GET_POPULAR_MOVIE_FAIL,
                payload: err.message
            });
        }
    }
}
export const addWishList = (item: any) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.ADD_WISHLIST_SUCCESS,
            payload: item
        });

    }
}
export const removeWishList = (item: any) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.REMOVE_WISHLIST_SUCCESS,
            payload: item
        });

    }
} 