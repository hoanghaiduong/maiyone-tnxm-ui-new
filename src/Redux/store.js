import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import storage from 'redux-persist/lib/storage'; // Default to localStorage
import { persistReducer, persistStore } from 'redux-persist';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

import authReducer  from './slices/authSlice'; // Create your slice

const rootReducer = combineReducers({
  auth: authReducer , // Add your slices here
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'], // Chỉ lưu trạng thái auth
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk,
      serializableCheck: false,
    }),
});

export default store;
export const persistor = persistStore(store);
