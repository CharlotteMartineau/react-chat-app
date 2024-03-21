import { call, put } from "redux-saga/effects";
import {
  signInSuccess,
  signInFailure,
  setAuthTokenRequest,
  setAuthTokenSuccess,
  setAuthTokenFailure,
  resetOnLogout,
} from "../redux/AuthenticationRedux";
import { resetChatrooms } from "../redux/ChatroomsRedux";

export function* signIn(api, action) {
  const response = yield call(api.signIn, action.payload);
  if (response.statusText === "OK") {
    yield put(signInSuccess(response.data.user));
    yield put(setAuthTokenRequest(response.data.user.token));
  } else {
    yield put(signInFailure(response.data.error));
  }
}

export function* setAuthToken(api, action) {
  const response = yield call(api.setAuthToken, action.payload);
  if (response) {
    yield put(setAuthTokenSuccess());
  } else {
    yield put(setAuthTokenFailure());
    yield put(resetOnLogout());
  }
}

export function* logout(api) {
  yield call(api.removeAuthToken);
  yield put(resetChatrooms());
}
