import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface ISoundState {
  isInitial: boolean;
  turnOn: boolean;
}

const initialState: ISoundState = {
  isInitial: true,
  turnOn: false,
};

export const soundSlice = createSlice({
  name: "sound",
  initialState,
  reducers: {
    switchSound: (state) => {
      state.isInitial = false;
      state.turnOn = !state.turnOn;
    },
  },
});

export const { switchSound } = soundSlice.actions;

export const quizSelector = (state: RootState) => state.quiz;

export default soundSlice.reducer;
