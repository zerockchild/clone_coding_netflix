
import logger from 'redux-logger'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import homeReducer from '../features/home/homeSlice';

const rootReducer = combineReducers({
    home: homeReducer
})

const createStore = () => {

    const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    // preloadedState: initialState,
})

console.log('store',store.getState());

return store;

}

export default createStore;