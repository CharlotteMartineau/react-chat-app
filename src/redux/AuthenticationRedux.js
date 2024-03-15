import { createReducer, createAction } from "@reduxjs/toolkit";

export const signInRequest = createAction("SIGN_IN_REQUEST");
export const signInSuccess = createAction("SIGN_IN_SUCCESS");
export const signInFailure = createAction("SIGN_IN_FAILURE");

export const setAuthTokenRequest = createAction("SET_AUTH_TOKEN_REQUEST");
export const setAuthTokenSuccess = createAction("SET_AUTH_TOKEN_SUCCESS");
export const setAuthTokenFailure = createAction("SET_AUTH_FAILURE");

export const resetOnLogout = createAction("RESET_ON_LOGOUT");

const INITIAL_STATE = {
  currentUser: null,
  isLoggedIn: false,
  isFetching: false,
  error: null,
};

export const authReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(signInRequest, (state) => {
      return {
        ...state,
        isFetching: true,
        error: INITIAL_STATE.error,
        currentUser: INITIAL_STATE.currentUser,
      };
    })
    .addCase(signInSuccess, (state, action) => {
      return {
        ...state,
        isFetching: INITIAL_STATE.isFetching,
        error: INITIAL_STATE.error,
        currentUser: action.payload,
      };
    })
    .addCase(signInFailure, (state, action) => {
      return {
        ...state,
        isFetching: INITIAL_STATE.isFetching,
        error: action.payload,
      };
    })
    .addCase(setAuthTokenRequest, (state) => {
      return {
        ...state,
        isFetching: true,
        error: INITIAL_STATE.error,
      };
    })
    .addCase(setAuthTokenSuccess, (state) => {
      return {
        ...state,
        isFetching: INITIAL_STATE.isFetching,
        error: INITIAL_STATE.error,
        isLoggedIn: true,
      };
    })
    .addCase(setAuthTokenFailure, (state) => {
      return { ...state, isFetching: INITIAL_STATE.isFetching };
    })
    .addCase(resetOnLogout, () => {
      return { ...INITIAL_STATE };
    })
    .addDefaultCase((state) => {
      return state;
    });
});
