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

export const fetchSendBookingQuest = createAsyncThunk<void, TBookingResponseData, { extra: AxiosInstance }>(
  'data/fetchSendBookingQuest',
  async (quest, { extra: api }) => {
    await api.post(`${ApiRoute.QUESTS}/${quest.placeId}/${ApiRoute.BOOKING}`, quest);
  }
);

// date: quest.data, time: quest.time, contactPerson: quest.contactPerson,
