import { combineReducers } from '@reduxjs/toolkit';
import { questsSlice } from './slice/quests/quests';
import { questSlice } from './slice/quest/quest';
import { userSlice } from './slice/user/user';
import { bookingSlice } from './slice/booking/booking';

export const rootReducer = combineReducers({
  [questsSlice.name]: questsSlice.reducer,
  [questSlice.name]: questSlice.reducer,
  [userSlice.name]: userSlice.reducer,
  [bookingSlice.name]: bookingSlice.reducer,
});
