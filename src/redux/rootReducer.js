import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { camperReducer } from './campers/campers-slice';
import { favoriteReducer } from './favorite/favorite-slice';
import storage from 'redux-persist/lib/storage';
import { filterReducer } from './filter-slice';

const persistConfig = {
  key: 'campers',
  storage,
  whitelist: ['favorite'],
};

const persistedfavoriteReducer = persistReducer(persistConfig, favoriteReducer);

const rootReducer = combineReducers({
  campers: camperReducer,
  favorite: persistedfavoriteReducer,
  filter: filterReducer,
});

export default rootReducer;
