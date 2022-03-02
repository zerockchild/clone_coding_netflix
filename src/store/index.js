
import logger from 'redux-logger'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import homeSlice from '../pages/home/slice';

const initialState = {
    // todos: [
    //     {
    //         text: 'Eat food',
    //         completed: true,
    //     },
    //     {
    //         text: 'Exercise',
    //         completed: false,
    //     },
    // ],
    // visibilityFilter: 'SHOW_COMPLETED',
    // isPlaying: false,
};

const rootReducer = combineReducers({
    homeSlice
    // todos,
    // visibility,
})

const createStore = () => {

    const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    // preloadedState: initialState,
})

return store;

}

export default createStore;