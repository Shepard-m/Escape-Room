import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { TQuestCardPreview } from '../types/quest-card-preview';
import { ApiRoute } from '../const';

export const fetchQuestCardPreview = createAsyncThunk<TQuestCardPreview[], undefined, { extra: AxiosInstance }>(
  'data/fetchQuestsPreviews',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<TQuestCardPreview[]>(ApiRoute.INDEX_PAGE);

    return data;
  }
);

