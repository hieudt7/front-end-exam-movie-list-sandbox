import { combineReducers } from 'redux';
import movieReducer from './index';
const reducers = combineReducers({
    movies: movieReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;