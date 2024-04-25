import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { TQuestCardPreview } from '../types/quest-card-preview';
import { ApiRoute, AppRoute } from '../const';
import { TQuest } from '../types/quest';
import { TAuthData } from '../types/auth-data';
import { saveToken } from '../service/token';
import { TUserData } from '../types/user-data';

export const fetchQuestsCardPreview = createAsyncThunk<TQuestCardPreview[], undefined, { extra: AxiosInstance }>(
  'data/fetchQuestsPreviews',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<TQuestCardPreview[]>(ApiRoute.QUESTS);

    return data;
  }
);

export const fetchQuest = createAsyncThunk<TQuest, string, { extra: AxiosInstance }>(
  'data/fetchQuest',
  async (id, { extra: api }) => {
    const { data } = await api.get<TQuest>(`${ApiRoute.QUESTS}/${id}`);

    return data;
  }
);

export const fetchUserLogin = createAsyncThunk<string, TAuthData, { extra: AxiosInstance }>(
  'data/fetchUserLogin',
  async (dataUser, { extra: api }) => {
    const { data } = await api.post<TUserData>(AppRoute.LOGIN_PAGE, { email: dataUser.email, password: dataUser.password });

    saveToken(data.token);
    return data.email;
  }
);
export const fetchUserLogout = createAsyncThunk<void, undefined, { extra: AxiosInstance }>(
  'data/fetchUserLogout',
  async (_arg, { extra: api }) => {
    await api.delete(AppRoute.LOGIN_PAGE);
  }
);

