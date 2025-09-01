import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './homeslide';

export const store = configureStore({
  reducer: {
    home: homeReducer,
  },
});
