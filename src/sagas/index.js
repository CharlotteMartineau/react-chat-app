import { takeLatest, all } from "redux-saga/effects";
import api from "./Api";

import { startupRequest } from "../redux/StartupRedux";
import startup from "../sagas/StartupSagas";

import {
  signInRequest,
  setAuthTokenRequest,
  resetOnLogout,
} from "../redux/AuthenticationRedux";
import { signIn, setAuthToken, logout } from "./AuthenticationSagas";

import {
  getChatroomsRequest,
  getChatroomRequest,
  createChatroomMessageRequest,
} from "../redux/ChatroomsRedux";
import {
  getChatrooms,
  getChatroom,
  createChatroomMessage,
} from "./ChatroomsSagas";

export default function* rootSaga() {
  yield all([
    takeLatest(startupRequest, startup, api),

    takeLatest(signInRequest, signIn, api),
    takeLatest(setAuthTokenRequest, setAuthToken, api),
    takeLatest(resetOnLogout, logout, api),

    takeLatest(getChatroomsRequest, getChatrooms, api),
    takeLatest(getChatroomRequest, getChatroom, api),
    takeLatest(createChatroomMessageRequest, createChatroomMessage, api),
  ]);
}
