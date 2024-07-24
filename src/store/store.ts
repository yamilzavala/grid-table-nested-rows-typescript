import { configureStore } from '@reduxjs/toolkit';
import rowReducer from './rowSlice';

const store = configureStore({
    reducer: {
      rows: rowReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;