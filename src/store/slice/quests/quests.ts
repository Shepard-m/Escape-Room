import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TQuestCardPreview } from '../../../types/quest-card-preview';
import { fetchQuestsCardPreview } from '../../api-action';
import { ListDataNamePage, RequestStatus } from '../../../const';
import { filteredGenreQuests } from '../../../hooks/filter-genre';
import { filteredLevelQuests } from '../../../hooks/filter-level';
import { FilterLevelOption } from '../../../const';

type TInitState = {
  statusQuests: string;
  quests: TQuestCardPreview[];
  currentFilterLevel: string;
  filterGenreQuests: TQuestCardPreview[];
  initialQuest: TQuestCardPreview[];
  activePage: string;
}

const initialState: TInitState = {
  statusQuests: RequestStatus.NONE,
  currentFilterLevel: FilterLevelOption.ANY.id,
  quests: [],
  filterGenreQuests: [],
  initialQuest: [],
  activePage: ListDataNamePage.QUEST
};

const questsSlice = createSlice({
  extraReducers(builder) {
    builder
      .addCase(fetchQuestsCardPreview.pending, (state) => {
        state.statusQuests = RequestStatus.LOADING;
      })
      .addCase(fetchQuestsCardPreview.fulfilled, (state, action) => {
        state.statusQuests = RequestStatus.SUCCESS;
        state.initialQuest = action.payload;
        state.filterGenreQuests = action.payload;
        state.quests = filteredGenreQuests(state.initialQuest, FilterLevelOption.ANY.id);
      })
      .addCase(fetchQuestsCardPreview.rejected, (state) => {
        state.statusQuests = RequestStatus.FAILED;
      });
  },
  initialState,
  name: 'quests',
  reducers: {
    filterQuestsGenre: (state, action: PayloadAction<{ filter: string }>) => {
      state.quests = filteredGenreQuests(state.initialQuest, action.payload.filter);
      state.filterGenreQuests = filteredGenreQuests(state.initialQuest, action.payload.filter);
      state.currentFilterLevel = FilterLevelOption.ANY.id;
    },
    filterQuestsLevel: (state, action: PayloadAction<{ filter: string }>) => {

      state.quests = filteredLevelQuests(state.filterGenreQuests, action.payload.filter);
      state.currentFilterLevel = action.payload.filter;
    },
    selectActivePage: (state, action: PayloadAction<{ activePage: string }>) => {
      state.activePage = action.payload.activePage;
    }
  },
  selectors: {
    quests: (state) => state.quests,
    currentFilterLevel: (state) => state.currentFilterLevel,
    filterGenreQuests: (state) => state.filterGenreQuests,
    activePage: (state) => state.activePage,
  }
});

const questsActions = questsSlice.actions;
const questsSelectors = questsSlice.selectors;

export { questsActions, questsSelectors, questsSlice };
