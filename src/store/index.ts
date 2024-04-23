import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../service/api';
import { rootReducer } from './rootReduser';

const api = createAPI();

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      }
    }),
  reducer: rootReducer,
});

