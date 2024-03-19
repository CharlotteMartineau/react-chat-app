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

export function* signIn(api, loginAttributes) {
  const response = yield call(api.signIn, loginAttributes.payload);
  if (response.statusText === "OK") {
    yield put(signInSuccess(response.data.user));
    yield put(setAuthTokenRequest(response.data.user.token));
  } else {
    yield put(signInFailure(response.data.error));
  }
}

export function* setAuthToken(api, authToken) {
  const response = yield call(api.setAuthToken, authToken.payload);
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
