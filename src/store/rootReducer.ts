import { combineReducers } from '@reduxjs/toolkit';
import { contextSlice } from '../features/context/contextSlice';

export const rootReducer = combineReducers({
  context: contextSlice.reducer
});
export type RootState = ReturnType<typeof rootReducer>;
