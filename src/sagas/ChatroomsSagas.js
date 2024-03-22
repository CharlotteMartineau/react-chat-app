import { call, put } from "redux-saga/effects";
import {
  getChatroomsSuccess,
  getChatroomsFailure,
  getChatroomSuccess,
  getChatroomFailure,
  createChatroomMessageSuccess,
  createChatroomMessageFailure,
} from "../redux/ChatroomsRedux";

export function* getChatrooms(api) {
  const response = yield call(api.getChatrooms);
  if (response.status === 200) {
    yield put(getChatroomsSuccess(response.data.chatrooms));
  } else {
    yield put(getChatroomsFailure(response.data.error));
  }
}

export function* getChatroom(api, action) {
  const response = yield call(api.getChatroom, action.payload);
  if (response.status === 200) {
    yield put(getChatroomSuccess(response.data.chatroom));
  } else {
    yield put(getChatroomFailure(response.data.error));
  }
}

export function* createChatroomMessage(api, action) {
  const response = yield call(api.createChatroomMessage, action.payload);
  console.log(response);
  if (response.status === 201) {
    yield put(createChatroomMessageSuccess(response.data.message));
  } else {
    yield put(createChatroomMessageFailure(response.data.error));
  }
}
