import { createReducer, createAction } from "@reduxjs/toolkit";

export const signInRequest = createAction("SIGN_IN_REQUEST");
export const signInSuccess = createAction("SIGN_IN_SUCCESS");
export const signInFailure = createAction("SIGN_IN_FAILURE");

const INITIAL_STATE = {
  currentUser: null,
  isFetching: false,
  error: null,
};

export const authReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(signInRequest, (state, action) => {
      state.currentUser = INITIAL_STATE.currentUser;
      state.isFetching = true;
      state.error = INITIAL_STATE.error;
    })
    .addCase(signInSuccess, (state, action) => {
      state.currentUser = action.payload;
      state.isFetching = INITIAL_STATE.isFetching;
    })
    .addCase(signInFailure, (state, action) => {
      state.error = action.payload;
      state.isFetching = INITIAL_STATE.isFetching;
    })
    .addDefaultCase(() => {});
});
