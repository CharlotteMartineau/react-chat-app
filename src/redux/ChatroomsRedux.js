import { createReducer, createAction } from "@reduxjs/toolkit";

export const getChatroomsRequest = createAction("GET_CHATROOMS_REQUEST");
export const getChatroomsSuccess = createAction("GET_CHATROOMS_SUCCESS");
export const getChatroomsFailure = createAction("GET_CHATROOMS_FAILURE");

export const getChatroomRequest = createAction("GET_CHATROOM_REQUEST");
export const getChatroomSuccess = createAction("GET_CHATROOM_SUCCESS");
export const getChatroomFailure = createAction("GET_CHATROOM_FAILURE");

export const resetChatrooms = createAction("RESET_CHATROOMS");

const INITIAL_STATE = {
  chatrooms: [],
  chatroom: null,
  isFetching: {
    getChatrooms: false,
    getChatroom: false,
  },
  error: null,
};

export const chatroomsReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(getChatroomsRequest, (state) => {
      return {
        ...state,
        isFetching: {
          ...state.isFetching,
          getChatrooms: true,
        },
        error: INITIAL_STATE.error,
      };
    })
    .addCase(getChatroomsSuccess, (state, action) => {
      return {
        ...state,
        isFetching: {
          ...state.isFetching,
          getChatrooms: false,
        },
        error: INITIAL_STATE.error,
        chatrooms: action.payload,
      };
    })
    .addCase(getChatroomsFailure, (state, action) => {
      return {
        ...state,
        isFetching: {
          ...state.isFetching,
          getChatrooms: false,
        },
        error: action.payload,
      };
    })
    .addCase(getChatroomRequest, (state) => {
      return {
        ...state,
        isFetching: {
          ...state.isFetching,
          getChatroom: true,
        },
        error: INITIAL_STATE.error,
      };
    })
    .addCase(getChatroomSuccess, (state, action) => {
      return {
        ...state,
        isFetching: {
          ...state.isFetching,
          getChatroom: false,
        },
        error: INITIAL_STATE.error,
        chatroom: action.payload,
      };
    })
    .addCase(getChatroomFailure, (state, action) => {
      return {
        ...state,
        isFetching: {
          ...state.isFetching,
          getChatroom: false,
        },
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
