import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "../redux/AuthenticationRedux";
import { chatroomsReducer } from "../redux/ChatroomsRedux";
import rootSaga from "../sagas/index";

const sagaMiddleware = createSagaMiddleware();

const reducers = {
  auth: authReducer,
  chatrooms: chatroomsReducer,
};

const rootReducer = combineReducers(reducers);

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "chatrooms"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
