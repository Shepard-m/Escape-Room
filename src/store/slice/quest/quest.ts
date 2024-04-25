import { createSlice } from '@reduxjs/toolkit';
import { fetchQuest } from '../../api-action';
import { RequestStatus } from '../../../const';
import { TQuest } from '../../../types/quest';

type TInitState = {
  statusQuests: string;
  currentQuest: TQuest | undefined;
}

const initialState: TInitState = {
  statusQuests: RequestStatus.NONE,
  currentQuest: undefined,
};

const questSlice = createSlice({
  extraReducers(builder) {
    builder
      .addCase(fetchQuest.pending, (state) => {
        state.statusQuests = RequestStatus.LOADING;
      })
      .addCase(fetchQuest.fulfilled, (state, action) => {
        state.statusQuests = RequestStatus.SUCCESS;
        state.currentQuest = action.payload;
      })
      .addCase(fetchQuest.rejected, (state) => {
        state.statusQuests = RequestStatus.FAILED;
      });
  },
  initialState,
  name: 'quest',
  reducers: {

  },
  selectors: {
    currentQuest: (state) => state.currentQuest,
  }
});

const questActions = questSlice.actions;
const questSelectors = questSlice.selectors;

export { questActions, questSelectors, questSlice };
