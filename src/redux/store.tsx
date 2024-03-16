import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./slice/login";
import { useDispatch } from "react-redux";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
  reducer: { user: rootReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
export default store;

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

//persistStore - store state of the application in local storage(ls)
//persistReducer - tells which reducer slices should be stored and makin' it effective
//FLUSH - even if we shutdown the sys it forcibly writes the pending changes to ls protects loss of data
//REHYDRATE - it restores the data fom the store when the page or app reloads
//PAUSE - manually pausing or delaying the storage update via configuration parameters
//PERSIST - stores state
//PURGE - Remove from store
