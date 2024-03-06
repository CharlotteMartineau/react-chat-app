import { takeLatest } from "redux-saga/effects";
import api from "./Api";

import { signInRequest } from "../redux/AuthenticationRedux";
import { signIn } from "./AuthenticationSagas";

export default function* rootSaga() {
  yield takeLatest(signInRequest, signIn, api);
}
