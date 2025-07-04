import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counter-slice';
import authSlice from './auth/auth-slice';
import apiSlice from './api/api-slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    authSlice: authSlice.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
