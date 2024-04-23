import { combineReducers } from '@reduxjs/toolkit';
import { questsSlice } from './slice/quests/quests';

export const rootReducer = combineReducers({
  [questsSlice.name]: questsSlice.reducer,
});
