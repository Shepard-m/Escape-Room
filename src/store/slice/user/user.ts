import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, RequestStatus } from '../../../const';
import { fetchGetUserData, fetchUserLogin, fetchUserLogout } from '../../api-action';
import { dropToken } from '../../../service/token';

type TInitialState = {
  user: string | null;
  authorizationStatus: string;
  statusRequestUser: typeof RequestStatus.NONE;
}

const initialState: TInitialState = {
  authorizationStatus: AuthorizationStatus.UN_KNOWN,
  statusRequestUser: RequestStatus.NONE,
  user: null,
};

const userSlice = createSlice({
  extraReducers(builder) {
    builder
      .addCase(fetchUserLogin.pending, (state) => {
        state.statusRequestUser = RequestStatus.LOADING;
      })
      .addCase(fetchUserLogin.fulfilled, (state, action) => {
        state.statusRequestUser = RequestStatus.SUCCESS;
        state.user = action.payload;
        state.authorizationStatus = AuthorizationStatus.AUTH;
      })
      .addCase(fetchUserLogin.rejected, (state) => {
        state.statusRequestUser = RequestStatus.FAILED;
      })
      .addCase(fetchUserLogout.pending, (state) => {
        state.statusRequestUser = RequestStatus.LOADING;
      })
      .addCase(fetchUserLogout.fulfilled, (state) => {
        state.statusRequestUser = RequestStatus.SUCCESS;
        state.user = null;
        state.authorizationStatus = AuthorizationStatus.NO_AUTH;
        dropToken();
      })
      .addCase(fetchUserLogout.rejected, (state) => {
        state.statusRequestUser = RequestStatus.FAILED;
      })
      .addCase(fetchGetUserData.pending, (state) => {
        state.statusRequestUser = RequestStatus.LOADING;
      })
      .addCase(fetchGetUserData.fulfilled, (state, action) => {
        state.statusRequestUser = RequestStatus.SUCCESS;
        state.user = action.payload.email;
        state.authorizationStatus = AuthorizationStatus.AUTH;
      })
      .addCase(fetchGetUserData.rejected, (state) => {
        state.statusRequestUser = RequestStatus.FAILED;
      });
  },
  initialState,
  name: 'user',
  reducers: {

  },
  selectors: {
    user: (state) => state.user,
    statusRequestUser: (state) => state.statusRequestUser,
    authorizationStatus: (state) => state.authorizationStatus,
  }
});

const userActions = userSlice.actions;
const userSelectors = userSlice.selectors;

export { userActions, userSelectors, userSlice };
