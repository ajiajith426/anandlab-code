import { configureStore } from '@reduxjs/toolkit';
import reducers from "./Reducers/index";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk';
import { apiMaster } from '../services/apiMaster';

const persistedReducer = persistReducer({
    key: 'root',
    storage,
    whitelist: ['navigation']
}, reducers)

export const Store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
    .concat(apiMaster.middleware)
    .concat(thunk)
});

export default Store;