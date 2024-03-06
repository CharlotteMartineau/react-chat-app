import { call, put } from "redux-saga/effects";
import { signInSuccess, signInFailure } from "../redux/AuthenticationRedux";

export function* signIn(api, action) {
  const response = yield call(api.signIn, action.payload);
  if (response.statusText === "OK") {
    yield put(signInSuccess(response.data.user));
  } else {
    yield put(signInFailure(response.data.error));
  }
}
