import { call, put } from "redux-saga/effects";
import {
  getChatroomsSuccess,
  getChatroomsFailure,
  getChatroomSuccess,
  getChatroomFailure,
} from "../redux/ChatroomsRedux";

export function* getChatrooms(api) {
  const response = yield call(api.getChatrooms);
  if (response.statusText === "OK") {
    yield put(getChatroomsSuccess(response.data.chatrooms));
  } else {
    yield put(getChatroomsFailure(response.data.error));
  }
}

export function* getChatroom(api, action) {
  const response = yield call(api.getChatroom, action.payload);
  if (response.statusText === "OK") {
    yield put(getChatroomSuccess(response.data.chatroom));
  } else {
    yield put(getChatroomFailure(response.data.error));
  }
}
