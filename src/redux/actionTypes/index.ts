export enum ActionType {
    IS_LOADING_ACTION = 'IS_LOADING_ACTION',
    GET_POPULAR_MOVIE_SUCCESS = 'GET_POPULAR_MOVIE_SUCCESS',
    GET_POPULAR_MOVIE_FAIL = 'GET_POPULAR_MOVIE_FAIL',
    GET_MOVIE_SEARCH_SUCCESS = 'GET_MOVIE_SEARCH_SUCCESS',
    ADD_WISHLIST_SUCCESS = 'ADD_WISHLIST_SUCCESS',
    ADD_WISHLIST_FAIL = 'ADD_WISHLIST_FAIL',
    REMOVE_WISHLIST_SUCCESS = 'REMOVE_WISHLIST_SUCCESS',
}

interface actionPending {
    type: ActionType.IS_LOADING_ACTION;
}

interface actionSuccess {
    type: ActionType.GET_POPULAR_MOVIE_SUCCESS;
    payload: IMovieObject;
}
interface getSearchSuccess {
    type: ActionType.GET_MOVIE_SEARCH_SUCCESS;
    payload: IMovieObject;
}

interface actionFail {
    type: ActionType.GET_POPULAR_MOVIE_FAIL;
    payload: string;
}
interface addWishListSuccess {
    type: ActionType.ADD_WISHLIST_SUCCESS;
    payload: any[];
}
interface addWishListFail {
    type: ActionType.ADD_WISHLIST_FAIL;
    payload: string;
}
interface removeWishListSuccess {
    type: ActionType.REMOVE_WISHLIST_SUCCESS;
    payload: any;
}

export type Action = actionPending | actionSuccess | actionFail | addWishListSuccess | addWishListFail | removeWishListSuccess | getSearchSuccess;