import { createReducer, createAction } from "@reduxjs/toolkit";

export const getChatroomsRequest = createAction("GET_CHATROOMS_REQUEST");
export const getChatroomsSuccess = createAction("GET_CHATROOMS_SUCCESS");
export const getChatroomsFailure = createAction("GET_CHATROOMS_FAILURE");

export const getChatroomRequest = createAction("GET_CHATROOM_REQUEST");
export const getChatroomSuccess = createAction("GET_CHATROOM_SUCCESS");
export const getChatroomFailure = createAction("GET_CHATROOM_FAILURE");

export const createChatroomMessageRequest = createAction(
  "CREATE_CHATROOM_MESSAGE_REQUEST"
);
export const createChatroomMessageSuccess = createAction(
  "CREATE_CHATROOM_MESSAGE_SUCCESS"
);
export const createChatroomMessageFailure = createAction(
  "CREATE_CHATROOM_MESSAGE_FAILURE"
);

export const createChatroomMembershipsRequest = createAction(
  "CREATE_CHATROOM_MEMBERSHIPS_REQUEST"
);
export const createChatroomMembershipsSuccess = createAction(
  "CREATE_CHATROOM_MEMBERSHIPS_SUCCESS"
);
export const createChatroomMembershipsFailure = createAction(
  "CREATE_CHATROOM_MEMBERSHIPS_FAILURE"
);

export const resetChatrooms = createAction("RESET_CHATROOMS");

const INITIAL_STATE = {
  chatrooms: [],
  chatroom: null,
  isFetching: {
    getChatrooms: false,
    getChatroom: false,
    createChatroomMessage: false,
  },
  errors: {
    getChatrooms: null,
    getChatroom: null,
    createChatroomMessage: null,
  },
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
        errors: { ...INITIAL_STATE.errors },
      };
    })
    .addCase(getChatroomsSuccess, (state, action) => {
      return {
        ...state,
        isFetching: {
          ...state.isFetching,
          getChatrooms: false,
        },
        errors: { ...INITIAL_STATE.errors },
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
        errors: {
          ...state.errors,
          getChatrooms: action.payload,
        },
      };
    })
    .addCase(getChatroomRequest, (state) => {
      return {
        ...state,
        isFetching: {
          ...state.isFetching,
          getChatroom: true,
        },
        errors: { ...INITIAL_STATE.errors },
      };
    })
    .addCase(getChatroomSuccess, (state, action) => {
      return {
        ...state,
        isFetching: {
          ...state.isFetching,
          getChatroom: false,
        },
        errors: { ...INITIAL_STATE.errors },
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
        errors: {
          ...state.errors,
          getChatroom: action.payload,
        },
      };
    })
    .addCase(createChatroomMessageRequest, (state) => {
      return {
        ...state,
        isFetching: {
          ...state.isFetching,
          createChatroomMessage: true,
        },
        errors: { ...INITIAL_STATE.errors },
      };
    })
    .addCase(createChatroomMessageSuccess, (state, action) => {
      const newMessages = state.chatroom.messages.slice();
      newMessages.push(action.payload);
      return {
        ...state,
        isFetching: {
          ...state.isFetching,
          createChatroomMessage: false,
        },
        errors: { ...INITIAL_STATE.errors },
        chatroom: {
          ...state.chatroom,
          messages: newMessages,
        },
      };
    })
    .addCase(createChatroomMessageFailure, (state, action) => {
      return {
        ...state,
        isFetching: {
          ...state.isFetching,
          createChatroomMessage: false,
        },
        errors: {
          ...state.errors,
          createChatroomMessage: action.payload,
        },
      };
    })
    .addCase(createChatroomMembershipsRequest, (state) => {
      return {
        ...state,
        isFetching: {
          ...state.isFetching,
          createChatroomMemberships: true,
        },
        errors: { ...INITIAL_STATE.errors },
      };
    })
    .addCase(createChatroomMembershipsSuccess, (state, action) => {
      const chatroom = action.payload;
      const newChatrooms = state.chatrooms.map((c) =>
        c.id === chatroom.id ? chatroom : c
      );

      return {
        ...state,
        isFetching: {
          ...state.isFetching,
          createChatroomMemberships: false,
        },
        errors: { ...INITIAL_STATE.errors },
        chatrooms: newChatrooms,
        chatroom: {
          ...state.chatroom,
          chatroom_memberships: chatroom.chatroom_memberships,
        },
      };
    })
    .addCase(createChatroomMembershipsFailure, (state, action) => {
      return {
        ...state,
        isFetching: {
          ...state.isFetching,
          createChatroomMemberships: false,
        },
        errors: {
          ...state.errors,
          createChatroomMemberships: action.payload,
        },
      };
    })
    .addCase(resetChatrooms, () => {
      return { ...INITIAL_STATE };
    })
    .addDefaultCase((state) => {
      return state;
    });
});
