import { combineReducers } from '@reduxjs/toolkit';
import { questsSlice } from './slice/quests/quests';
import { questSlice } from './slice/quest/quest';
import { userSlice } from './slice/user/user';
import { bookingSlice } from './slice/booking/booking';
import { favoriteSlice } from './slice/favorite/favorite';

export const rootReducer = combineReducers({
  [questsSlice.name]: questsSlice.reducer,
  [questSlice.name]: questSlice.reducer,
  [userSlice.name]: userSlice.reducer,
  [bookingSlice.name]: bookingSlice.reducer,
  [favoriteSlice.name]: favoriteSlice.reducer,
});
