import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from '../Store/favoriteSlice';

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});

