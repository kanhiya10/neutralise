import { configureStore } from "@reduxjs/toolkit";
import DosageReducer from "./dosageInfo_Slice";
import CountReducer from "./platformCount_Slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// Configure the Redux store
export const store = configureStore({
  reducer: {
    Fetch: DosageReducer,
    CountPlatform:CountReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false, // Disable serializableCheck
  //     immutableCheck: false,    // Disable immutableCheck
  //   }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Create pre-typed versions of the hooks
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;