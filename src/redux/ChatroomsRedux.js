import { createReducer, createAction } from "@reduxjs/toolkit";

export const getChatroomsRequest = createAction("GET_CHATROOMS_REQUEST");
export const getChatroomsSuccess = createAction("GET_CHATROOMS_SUCCESS");
export const getChatroomsFailure = createAction("GET_CHATROOMS_FAILURE");

export const resetChatrooms = createAction("RESET_CHATROOMS");

const INITIAL_STATE = {
  chatrooms: [],
  isFetching: false,
  error: null,
};

export const chatroomsReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(getChatroomsRequest, (state) => {
      return {
        ...state,
        isFetching: true,
        error: INITIAL_STATE.error,
      };
    })
    .addCase(getChatroomsSuccess, (state, action) => {
      return {
        ...state,
        isFetching: INITIAL_STATE.isFetching,
        error: INITIAL_STATE.error,
        chatrooms: action.payload,
      };
    })
    .addCase(getChatroomsFailure, (state, action) => {
      return {
        ...state,
        isFetching: INITIAL_STATE.isFetching,
        error: action.payload,
      };
    })
    .addCase(resetChatrooms, () => {
      return { ...INITIAL_STATE };
    })
    .addDefaultCase((state) => {
      return state;
    });
});
