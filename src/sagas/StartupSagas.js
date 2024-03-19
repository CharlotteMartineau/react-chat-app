import { put } from "redux-saga/effects";

import { setAuthTokenRequest } from "../redux/AuthenticationRedux";

export default function* startup(api, state) {
  const { isLoggedIn, currentUser } = state.payload.auth;

  if (isLoggedIn) {
    yield put(setAuthTokenRequest(currentUser.token));
  }
}
