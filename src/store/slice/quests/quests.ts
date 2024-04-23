import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TQuestCardPreview } from '../../../types/quest-card-preview';
import { fetchQuestCardPreview } from '../../api-action';
import { RequestStatus } from '../../../const';

type TInitState = {
  statusQuests: string,
  quests: TQuestCardPreview[];
}

const initialState: TInitState = {
  statusQuests: RequestStatus.NONE,
  quests: []
};

const questsSlice = createSlice({
  extraReducers(builder) {
    builder
      .addCase(fetchQuestCardPreview.pending, (state) => {
        state.statusQuests = RequestStatus.LOADING;
      })
      .addCase(fetchQuestCardPreview.fulfilled, (state, action) => {
        state.statusQuests = RequestStatus.SUCCESS;
        state.quests = action.payload;
      })
      .addCase(fetchQuestCardPreview.rejected, (state) => {
        state.statusQuests = RequestStatus.FAILED;
      });
  },
  initialState,
  name: 'quests',
  reducers: {

  },
  selectors: {
    quests: (state) => state.quests,
  }
});

const questsActions = questsSlice.actions;
const questsSelectors = questsSlice.selectors;

export { questsActions, questsSelectors, questsSlice };
