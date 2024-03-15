import { takeLatest, all } from "redux-saga/effects";
import api from "./Api";

import {
  signInRequest,
  setAuthTokenRequest,
  resetOnLogout,
} from "../redux/AuthenticationRedux";
import { signIn, setAuthToken, logout } from "./AuthenticationSagas";

import { getChatroomsRequest } from "../redux/ChatroomsRedux";
import { getChatrooms } from "./ChatroomsSagas";

export default function* rootSaga() {
  yield all([
    takeLatest(signInRequest, signIn, api),
    takeLatest(setAuthTokenRequest, setAuthToken, api),
    takeLatest(resetOnLogout, logout, api),

    takeLatest(getChatroomsRequest, getChatrooms, api),
  ]);
}
