import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchFavorite, fetchFavoriteDeleteQuest } from '../../api-action';
import { RequestStatus } from '../../../const';
import { TFavorite } from '../../../types/favorite';

type TInitState = {
  statusQuests: string;
  favorites: TFavorite[] | undefined;
}

const initialState: TInitState = {
  statusQuests: RequestStatus.NONE,
  favorites: undefined,
};

const favoriteSlice = createSlice({
  extraReducers(builder) {
    builder
      .addCase(fetchFavorite.pending, (state) => {
        state.statusQuests = RequestStatus.LOADING;
      })
      .addCase(fetchFavorite.fulfilled, (state, action) => {
        state.statusQuests = RequestStatus.SUCCESS;
        state.favorites = action.payload;
      })
      .addCase(fetchFavorite.rejected, (state) => {
        state.statusQuests = RequestStatus.FAILED;
      })
      .addCase(fetchFavoriteDeleteQuest.pending, (state) => {
        state.statusQuests = RequestStatus.LOADING;
      })
      .addCase(fetchFavoriteDeleteQuest.fulfilled, (state) => {
        state.statusQuests = RequestStatus.SUCCESS;
      })
      .addCase(fetchFavoriteDeleteQuest.rejected, (state) => {
        state.statusQuests = RequestStatus.FAILED;
      });
  },
  initialState,
  name: 'favorite',
  reducers: {
    deleteQuest: (state, action: PayloadAction<{ id: string }>) => {
      state.favorites = state.favorites?.filter((quest) => quest.id !== action.payload.id);
    }
  },
  selectors: {
    favorites: (state) => state.favorites,
  }
});

const favoriteActions = favoriteSlice.actions;
const favoriteSelectors = favoriteSlice.selectors;

export { favoriteActions, favoriteSelectors, favoriteSlice };
