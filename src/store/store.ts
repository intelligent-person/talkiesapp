import { configureStore } from '@reduxjs/toolkit';
import genresReducer from './reducers/genresReducer';
import { Context, createWrapper } from 'next-redux-wrapper';
import { TypedUseSelectorHook, useSelector as useReduxSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    genres: genresReducer
  },
  devTools: true
});

const makeStore = (context: Context) => store;

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof store.getState>
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
// export type AppDispatch = typeof store.dispatch
export const wrapper = createWrapper<AppStore>(makeStore, { debug: false });
