import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchBookingQuest, fetchSendBookingQuest } from '../../api-action';
import { RequestStatus } from '../../../const';
import { TBooking } from '../../../types/booking';

type TInitState = {
  statusBooking: string;
  bookings: TBooking[] | undefined;
  selectQuestBooking: string | null;
}

const initialState: TInitState = {
  statusBooking: RequestStatus.NONE,
  bookings: undefined,
  selectQuestBooking: null,
};

const bookingSlice = createSlice({
  extraReducers(builder) {
    builder
      .addCase(fetchBookingQuest.pending, (state) => {
        state.statusBooking = RequestStatus.LOADING;
      })
      .addCase(fetchBookingQuest.fulfilled, (state, action) => {
        state.statusBooking = RequestStatus.SUCCESS;
        state.bookings = action.payload;
        state.selectQuestBooking = state.bookings[0].id;
      })
      .addCase(fetchBookingQuest.rejected, (state) => {
        state.statusBooking = RequestStatus.FAILED;
      })
      .addCase(fetchSendBookingQuest.pending, (state) => {
        state.statusBooking = RequestStatus.LOADING;
      })
      .addCase(fetchSendBookingQuest.fulfilled, (state) => {
        state.statusBooking = RequestStatus.SUCCESS;
      })
      .addCase(fetchSendBookingQuest.rejected, (state) => {
        state.statusBooking = RequestStatus.FAILED;
      });
  },
  initialState,
  name: 'booking',
  reducers: {
    selectBooking: (state, action: PayloadAction<{ booking: string }>) => {
      state.selectQuestBooking = action.payload.booking;
    }
  },
  selectors: {
    bookings: (state) => state.bookings,
    selectQuestBooking: (state) => state.selectQuestBooking,
    statusBooking: (state) => state.statusBooking,
  }
});

const bookingActions = bookingSlice.actions;
const bookingSelectors = bookingSlice.selectors;

export { bookingSelectors, bookingActions, bookingSlice };
