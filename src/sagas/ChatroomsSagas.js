import { call, put } from "redux-saga/effects";
import {
  getChatroomsSuccess,
  getChatroomsFailure,
} from "../redux/ChatroomsRedux";

export function* getChatrooms(api) {
  const response = yield call(api.getChatrooms);
  if (response.statusText === "OK") {
    yield put(getChatroomsSuccess(response.data.chatrooms));
  } else {
    yield put(getChatroomsFailure(response.data.error));
  }
}
