import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { TQuestCardPreview } from '../types/quest-card-preview';
import { ApiRoute, AppRoute } from '../const';
import { TQuest } from '../types/quest';
import { TAuthData } from '../types/auth-data';
import { saveToken } from '../service/token';
import { TUserData } from '../types/user-data';
import { TBooking } from '../types/booking';
import { TBookingResponseData } from '../types/booking-respones-data';
import { TFavorite } from '../types/favorite';

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
    const { data } = await api.post<TUserData>(ApiRoute.LOGIN, { email: dataUser.email, password: dataUser.password });

    saveToken(data.token);
    return data.email;
  }
);

export const fetchGetUserData = createAsyncThunk<TUserData, undefined, { extra: AxiosInstance }>(
  'data/fetchGetUserData',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<TUserData>(ApiRoute.LOGIN);

    return data;
  }
);

export const fetchUserLogout = createAsyncThunk<void, undefined, { extra: AxiosInstance }>(
  'data/fetchUserLogout',
  async (_arg, { extra: api }) => {
    await api.delete(AppRoute.LOGIN_PAGE);
  }
);

export const fetchBookingQuest = createAsyncThunk<TBooking[], string, { extra: AxiosInstance }>(
  'data/fetchBookingQuest',
  async (id, { extra: api }) => {
    const { data } = await api.get<TBooking[]>(`${ApiRoute.QUESTS}/${id}/${ApiRoute.BOOKING}`);

    return data;
  }
);

export const fetchSendBookingQuest = createAsyncThunk<void, { formData: TBookingResponseData; id: string }, { extra: AxiosInstance }>(
  'data/fetchSendBookingQuest',
  async ({ formData, id }, { extra: api }) => {
    await api.post(`${ApiRoute.QUESTS}/${id}/${ApiRoute.BOOKING}`, formData);
  }
);

export const fetchFavorite = createAsyncThunk<TFavorite[], undefined, { extra: AxiosInstance }>(
  'data/fetchFavorite',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<TFavorite[]>(ApiRoute.FAVORITE);

    return data;
  }
);

export const fetchFavoriteDeleteQuest = createAsyncThunk<void, string, { extra: AxiosInstance }>(
  'data/fetchFavoriteDeleteQuest',
  async (id, { extra: api }) => {
    await api.delete(`${ApiRoute.FAVORITE}/${id}`);
  }
);
