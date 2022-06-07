import { Action, ActionType } from '../actionTypes/index';

const initialState = {
    movies: [],
    page: 0,
    total_pages: 0,
    total_results: 0,
    loading: false,
    hasLoadMore: false,
    wish_list: JSON.parse(localStorage.getItem('wishList') || '[]'),
    error: null,
}

const movieReducer = (state: MovieState = initialState, action: Action): MovieState => {
    switch (action.type) {
        case ActionType.IS_LOADING_ACTION:
            return {
                ...state,
                loading: true,
            }
        case ActionType.GET_POPULAR_MOVIE_SUCCESS:
            return {
                ...state,
                loading: false,
                movies: state.movies.concat(action.payload.results),
                page: action.payload.page,
                total_pages: action.payload.total_pages,
                total_results: action.payload.total_results,
                hasLoadMore: action.payload.page <= action.payload.total_pages
            }
        case ActionType.GET_MOVIE_SEARCH_SUCCESS:
            return {
                ...state,
                loading: false,
                movies: action.payload.page === 1 ? action.payload.results : state.movies.concat(action.payload.results),
                page: action.payload.page,
                total_pages: action.payload.total_pages,
                total_results: action.payload.total_results,
                hasLoadMore: action.payload.page <= action.payload.total_pages
            }
        case ActionType.GET_POPULAR_MOVIE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case ActionType.ADD_WISHLIST_SUCCESS:
            localStorage.setItem('wishList', JSON.stringify(state.wish_list.concat(action.payload)));
            return {
                ...state,
                wish_list: state.wish_list.concat(action.payload)
            }
        case ActionType.REMOVE_WISHLIST_SUCCESS:
            localStorage.setItem('wishList', JSON.stringify(state.wish_list.filter((item, idx) => item.id !== action.payload[0].id)));
            return {
                ...state,
                wish_list: state.wish_list.filter((item, idx) => item.id !== action.payload[0].id)
            }
        default:
            return state;
    }
}

export default movieReducer;
