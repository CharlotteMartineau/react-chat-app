import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { authReducer } from "../redux/AuthenticationRedux";
import { chatroomsReducer } from "../redux/ChatroomsRedux";
import rootSaga from "../sagas/index";

const sagaMiddleware = createSagaMiddleware();

const reducers = {
  auth: authReducer,
  chatrooms: chatroomsReducer,
};

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
