import { tableApi } from "./features/table/table-api-slice";
import { Action, combineReducers } from "redux";
import { configureStore, ThunkAction } from "@reduxjs/toolkit";

const reducers = combineReducers({
  [tableApi.reducerPath]: tableApi.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tableApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
